import { Career } from '../models/career';

export const CAREERS: Career[] = [
    {id: 1, name: 'career 1', description: 'A long indepth description of Career 1', shortDescription: 'A short indepth description of Career 1', 
    salaryRange: [12000, 13000], priorExperience: 'none', estimatedCompletion: '5 years'},
    {id: 2, name: 'career 2', description: 'A long indepth description of Career 2', shortDescription: 'A short indepth description of Career 2', 
    salaryRange: [10000, 11000], priorExperience: 'none', estimatedCompletion: '2 years'},
    {id: 3, name: 'career 3', description: 'A long indepth description of Career 3', shortDescription: 'A short indepth description of Career 3', 
    salaryRange: [9000, 10000], priorExperience: '3-5 yrs', estimatedCompletion: 'None'}
];
