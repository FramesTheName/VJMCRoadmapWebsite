export interface Career{
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    salaryRange: [number, number];
    priorExperience: string;
    estimatedCompletion: string;
    skillValue: Array<[number, number]>;
    //certValue: Array<[number, number]>;
    //mosValue: Array<[string, number]>;

    
}