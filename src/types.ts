export interface LessonItem {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  focusTag: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Activity' | 'Clock' | 'Compass';
}

export interface FaqItem {
  question: string;
  answer: string;
}
