import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceAssistentComponent } from './voice-assistent.component';

describe('VoiceAssistentComponent', () => {
  let component: VoiceAssistentComponent;
  let fixture: ComponentFixture<VoiceAssistentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceAssistentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceAssistentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
