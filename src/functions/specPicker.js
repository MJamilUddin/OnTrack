import { GCSEMathsAQA } from "../specifications/GCSEMathsAQA";
import { GCSEPhysicsAQA } from "../specifications/GCSEPhysicsAQA";
import { AlevelMathsAQA } from "../specifications/AlevelMathsAQA";
import { GCSEBiologyAQA } from "../specifications/GCSEBiologyAQA";

const coursesSelection = {
    GCSEMathsAQA: GCSEMathsAQA,
    GCSEPhysicsAQA: GCSEPhysicsAQA,
    AlevelMathsAQA: AlevelMathsAQA,
    GCSEBiologyAQA: GCSEBiologyAQA
}

export const specPicker = (courseName) => {
    
    return coursesSelection[courseName]
}
