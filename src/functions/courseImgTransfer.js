const coursesSelection = {
    GCSEMathsAQA: "math.png",
    GCSEPhysicsAQA: "math.png",
    GCSEBiologyAQA: "math.png",
    GCSEChemistryAQA: "math.png",
    AlevelMathsAQA: "math.png"
}

export const imgPicker = (courseName) => {
    
    return coursesSelection[courseName]
}