import { GCSEMathsAQA } from "../specifications/GCSEMathsAQA";
import { GCSEPhysicsAQA } from "../specifications/GCSEPhysicsAQA";
import { AlevelMathsAQA } from "../specifications/AlevelMathsAQA";

const coursesSelection = {
    GCSEMathsAQA: GCSEMathsAQA,
    GCSEPhysicsAQA: GCSEPhysicsAQA,
    AlevelMathsAQA: AlevelMathsAQA
}

export const specPicker = (courseName) => {
    
    return coursesSelection[courseName]
}
