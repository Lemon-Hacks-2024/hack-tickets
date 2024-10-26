interface TrainInfo {
  cityFrom: string;
  cityTo: string;
  date: string;
}

export interface Props {
  countSteps: number;
  step: number;
  trainInfo: TrainInfo;
}
