```javascript
// ==========================================
// NO-BURN SMART WASTE INTELLIGENCE
// ==========================================


// ==========================================
// ELEMENTS
// ==========================================

const imageInput = document.getElementById("imageInput");
const uploadArea = document.getElementById("uploadArea");
const fileName = document.getElementById("fileName");

const previewContainer =
    document.getElementById("previewContainer");

const previewImage =
    document.getElementById("previewImage");

const previewName =
    document.getElementById("previewName");

const detectBtn =
    document.getElementById("detectBtn");

const detectionResult =
    document.getElementById("detectionResult");

const resultStatus =
    document.getElementById("resultStatus");


// ACTION

const actionTitle =
    document.getElementById("actionTitle");

const actionDescription =
    document.getElementById("actionDescription");

const recommendedAction =
    document.getElementById("recommendedAction");

const actionBtn =
    document.getElementById("actionBtn");


// RECOVERY

const facilityTitle =
    document.getElementById("facilityTitle");

const facilityDescription =
    document.getElementById("facilityDescription");

const facilityMaterial =
    document.getElementById("facilityMaterial");

const facilityAction =
    document.getElementById("facilityAction");

const facilityPriority =
    document.getElementById("facilityPriority");

const collectionBtn =
    document.getElementById("collectionBtn");

const collectionStatus =
    document.getElementById("collectionStatus");


// IMPACT

const wasteImpact =
    document.getElementById("wasteImpact");


// ==========================================
// CURRENT FILE
// ==========================================

let selectedFile = null;


// ==========================================
// IMAGE SELECTION
// ==========================================

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }

    handleFile(file);

});


// ==========================================
// HANDLE IMAGE
// ==========================================

function handleFile(file) {

    // Check whether selected file is an image

    if (!file.type.startsWith("image/")) {

        alert("Please select a valid image file.");

        return;
    }


    // Store selected file

    selectedFile = file;


    // Display file name

    fileName.textContent
