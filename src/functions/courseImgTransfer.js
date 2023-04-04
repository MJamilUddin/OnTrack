const coursesSelection = {
    GCSEMathsAQA: "math.png",
    GCSEPhysicsAQA: "atoms.png",
    GCSEBiologyAQA: "biology.png",
    GCSEChemistryAQA: "chemistry.png",
    AlevelMathsAQA: "math.png",
    AlevelPhysicsAQA: "atoms.png",
    AlevelBiologyAQA: "biology.png",
    AlevelChemistryAQA: "chemistry.png",
}

export const imgPicker = (courseName) => {
    
    return coursesSelection[courseName]
}