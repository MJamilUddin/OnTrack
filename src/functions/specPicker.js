import { GCSEMathsAQA } from "../specifications/GCSEMathsAQA";
import { GCSEPhysicsAQA } from "../specifications/GCSEPhysicsAQA";
import { AlevelMathsAQA } from "../specifications/AlevelMathsAQA";
import { GCSEBiologyAQA } from "../specifications/GCSEBiologyAQA";
import { GCSEChemistryAQA } from "../specifications/GCSEChemistryAQA";

const coursesSelection = {
    GCSEMathsAQA: GCSEMathsAQA,
    GCSEPhysicsAQA: GCSEPhysicsAQA,
    GCSEBiologyAQA: GCSEBiologyAQA,
    GCSEChemistryAQA: GCSEChemistryAQA,
    AlevelMathsAQA: AlevelMathsAQA,
}

export const specPicker = (courseName) => {
    
    return coursesSelection[courseName]
}
