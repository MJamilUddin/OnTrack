import { GCSEMathsAQA } from "../specifications/GCSEMathsAQA";
import { GCSEPhysicsAQA } from "../specifications/GCSEPhysicsAQA";
import { GCSEBiologyAQA } from "../specifications/GCSEBiologyAQA";
import { GCSEChemistryAQA } from "../specifications/GCSEChemistryAQA";
import { AlevelMathsAQA } from "../specifications/AlevelMathsAQA";
import { AlevelBiologyAQA } from "../specifications/AlevelBiologyAQA";
import { AlevelChemistryAQA } from "../specifications/AlevelChemistryAQA";
import { AlevelPhysicsAQA } from "../specifications/AlevelPhysicsAQA";

const coursesSelection = {
    GCSEMathsAQA: GCSEMathsAQA,
    GCSEPhysicsAQA: GCSEPhysicsAQA,
    GCSEBiologyAQA: GCSEBiologyAQA,
    GCSEChemistryAQA: GCSEChemistryAQA,
    AlevelMathsAQA: AlevelMathsAQA,
    AlevelBiologyAQA: AlevelBiologyAQA,
    AlevelChemistryAQA: AlevelChemistryAQA,
    AlevelPhysicsAQA: AlevelPhysicsAQA
}

export const specPicker = (courseName) => {
    
    return coursesSelection[courseName]
}
