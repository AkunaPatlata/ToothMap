import { Component, OnInit } from '@angular/core';
import { MouthComponent } from '../mouth/mouth.component';

@Component({
  selector: 'app-voice-assistent',
  templateUrl: './voice-assistent.component.html',
  styleUrls: ['./voice-assistent.component.scss'],
})
export class VoiceAssistentComponent implements OnInit {
  constructor(private mouthComponent: MouthComponent) {}

  ngOnInit() {
    const SpeechRecognition = (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onresult = (event: any) => {
      const current = event.resultIndex;
      const transcript = event.results[current][0].transcript;
      this.speakThis(transcript.toLowerCase());
    };

    const btn = document.querySelector('.talk') as HTMLElement;
    btn.addEventListener('click', () => {
      this.startSpeechRecognition(recognition);
    });
  }

  speak(sentence: string) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.lang = 'uk-UA';
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
  }

  speakThis(message: string) {
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'uk-UA';
    let finalText = '';

    const parts: { [key: string]: string } = {
      зліва: 'left',
      зправа: 'right',
      'по центрі': 'center',
      зверху: 'top',
      знизу: 'bottom',
      'по центру': 'center',
      середина: 'center',
      посередині: 'center',
      справа: 'right',
    };

    const numbers: { [key: string]: number } = {
      перший: 1,
      першому: 1,
      другий: 2,
      другому: 2,
      третій: 3,
      третьому: 3,
      четвертий: 4,
      четвертому: 4,
      "п'ятий": 5,
      "п'ятому": 5,
      шостий: 6,
      шостому: 6,
      сьомий: 7,
      сьомому: 7,
      восьмий: 8,
      восьмому: 8,
      "дев'ятий": 9,
      "дев'ятому": 9,
      десятий: 10,
      десятому: 10,
      одинадцятий: 11,
      дванадцятий: 12,
      тринадцятий: 13,
      чотирнадцятий: 14,
      "п'ятнадцятий": 15,
      '15-му': 15,
      шістнадцятий: 16,
      сімнадцятий: 17,
      вісімнадцятий: 18,
      "дев'ятнадцятий": 19,
      двадцятий: 20,
      'двадцять другий': 22,
      'двадцять третій': 23,
      'двадцять четвертий': 24,
      "двадцять п'ятий": 25,
      'двадцять шостий': 26,
      'двадцять сьомий': 27,
      'двадцять восьмий': 28,
      "двадцять дев'ятий": 29,
      тридцятий: 30,
      'тридцять перший': 31,
      'тридцять другий': 32,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
    };

    const words = message.toLowerCase().split(' ');
    console.log(message);
    let toothNumber: number | null = null;
    let partToActivate: string | null = null;

    for (const word of words) {
      if (numbers[word]) {
        toothNumber = numbers[word];
      } else if (parts[word]) {
        partToActivate = parts[word];
      }
    }

    if (message.includes('виділити карієс')) {
      this.mouthComponent.actionMode = 'showKaries';
      this.mouthComponent.onActionModeChange();
    } else if (message.includes('вимкнути редагування карієсу')) {
      this.mouthComponent.showKaries = false;
    } else if (message.includes('видалити') && toothNumber !== null) {
      this.mouthComponent.actionMode = 'removeTooth';
      this.mouthComponent.onActionModeChange();
      this.mouthComponent.togglePart(`tooth${toothNumber}`, 'removed');
    } else if (message.includes('відновити') && toothNumber !== null) {
      this.mouthComponent.actionMode = 'restoreTooth';
      this.mouthComponent.onActionModeChange();
      this.mouthComponent.togglePart(`tooth${toothNumber}`, 'restore');
    } else if (message.includes('пломба') && toothNumber !== null) {
      this.mouthComponent.actionMode = 'plomba';
      this.mouthComponent.onActionModeChange();
      this.mouthComponent.togglePart(`tooth${toothNumber}`, 'plomba');
    } else if (message.startsWith('коментар')) {
      const comment = message.replace('коментар', '').trim();
      this.mouthComponent.addComment(comment);
    } else if (this.mouthComponent.showKaries === true) {
      if (toothNumber !== null && partToActivate !== null) {
        this.mouthComponent.togglePart(`tooth${toothNumber}`, partToActivate);
      } else if (toothNumber !== null) {
        finalText =
          'Вибачте, я не зрозуміла, яку частину зуба ви хочете активувати.';
      } else {
        finalText = 'Вибачте, я не зрозуміла, про який зуб ви говорите.';
      }
    } else {
      finalText = 'Вибачте, я не зрозуміла ваш запит.';
    }

    speech.text = finalText;
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  }

  private async startSpeechRecognition(recognition: any) {
    try {
      recognition.start();
      const result = await this.waitForSpeechRecognition(recognition, 10000);
      if (result) {
        const transcript = result[0].item(0).transcript.toLowerCase();
        this.speakThis(transcript);
      }
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  }

  private waitForSpeechRecognition(
    recognition: any,
    timeout: number
  ): Promise<SpeechRecognitionResult[] | null> {
    return new Promise((resolve, reject) => {
      let timerId: any;

      const onResult = (event: any) => {
        clearTimeout(timerId);
        recognition.onresult = null;
        resolve(event.results);
      };

      recognition.onresult = onResult;

      timerId = setTimeout(() => {
        recognition.onresult = null;
        resolve(null);
      }, timeout);
    });
  }
}
