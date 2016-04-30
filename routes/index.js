"use strict";

const express = require('express');
const router = new express.Router();
const reset = [

  {
    question: 'The correct order of the meninges, from the outer layer inwards:',
    a: 'Dura mater, Pia mater, Arachnoid membrane',
    b: 'Pia mater, Arachnoid membrane, Dura mater',
    c: 'Arachnoid membrane, Pia mater, Dura mater',
    d: 'Dura mater, Arachnoid membrane, Pia mater',
    correct: 'Dura mater, Arachnoid membrane, Pia mater'
  },

  {
    question: 'Which statement is false::',
    a: 'Cytoplasm is an aqueous solution',
    b: 'Cytoplasm is surrounded by a plasma membrane',
    c: 'Ribosomes are located in the cytoplasm',
    d: 'Cytoplasm has a pH of 5.5',
    correct: 'Cytoplasm has a pH of 5.5'
  },

  {
    question: 'Organic catalysts:',
    a: 'Slow down rate of reaction',
    b: 'Take part in the reaction',
    c: 'Speed up rate of reaction',
    d: 'Are all carbohydrates',
    correct: 'Speed up rate of reaction'
  },

  {
    question: "Organic catalysts:",
    a: "Slow down rate of reaction",
    b: "Take part in the reaction",
    c: "speed up rate of reaction",
    d: "Are all carbohydrates",
    correct: "speed up rate of reaction"
  },

  {
    question: "Which statement is false:",
    a: "Cytoplasm is an aqueous solution",
    b: "Cytoplasm is surrounded by a plasma membrane",
    c: "Ribosomes are located in the cytoplasm",
    d: "Cytoplasm has a pH of 5.5",
    correct: "Cytoplasm has a pH of 5.5"
  },

  {
    question: "Which is true:",
    a: "Plasma membrane is impermeable",
    b: "plasma membrane has a protein bi-layer",
    c: "plasma membrane is semi permeable",
    d: "large carbohdrate molecules form transport channels.",
    correct: "plasma membrane is semi permeable"
  },

  {
    question: "A solid that dissolves in a solvent is:",
    a: "solution",
    b: "solute",
    c: "precipitate",
    d: "ion",
    correct: "solute"
  },

  {
    question: "deoxyribose nucleic acid is located in the:",
    a: "nucleolus",
    b: "vacuole",
    c: "nucleus",
    d: "ribosomes",
    correct: "nucleus"
  },

  {
    question: "ribosomes are produced in the:",
    a: "vacuole",
    b: "nucleolus",
    c: "lysosomes",
    d: "mitochondria",
    correct: "nucleolus"
  },

  {
    question: "The following are all proteins:",
    a: "keratin, collagen, insulin, cellulose",
    b: "keratin, collagen, albumin, starch",
    c: "actin, keratin, collagen, albumin",
    d: "actin, keratin, insulin, DNA",
    correct: "actin, keratin, collagen, albumin"
  },

  {
    question: "Which is false:",
    a: "mammalian erythrocytes do not have a nucleus",
    b: "reptile erythrocytes possess a nucleus",
    c: "erythrocytes contain haemoglobin to grasp oxygen",
    d: "erythrocytes are produced in the yellow bone marrow",
    correct: "erythrocytes are produced in the yellow bone marrow"
  },

  {
    question: "When erythrocytes are placed in a hypertonic solution:",
    a: "water will leave by osmosis",
    b: "water will enter by osmosis",
    c: "no water movement",
    d: "water will move in and out",
    correct: "water will leave by osmosis"
  },

  {
    question: "When erythrocytes are placed in a weak solution:",
    a: "water will move out by osmosis",
    b: "water will enter by osmosis",
    c: "water will ove in both directions",
    d: "no water movement",
    correct: "water will enter by osmosis"
  },

  {
    question: "Site of aerobic respiration in a cell:",
    a: "ribosomes",
    b: "golgi apparatus",
    c: "mitochondria",
    d: "lysosome",
    correct: "mitochondria"
  },

  {
    question: "toxic by product of anareobic respiration:",
    a: "linoleic acid",
    b: "hydrochloric acid",
    c: "hydrogen peroxide",
    d: "lactic acid",
    correct: "lactic acid"
  },

  {
    question: "structure covered by ribosomes:",
    a: "SER",
    b: "golgi apparatus",
    c: "RER",
    d: "lysosomes",
    correct: "RER"
  },

  {
    question: "Synthesises lysosomes:",
    a: "mitochondria",
    b: "golgi apparatus",
    c: "ribosomes",
    d: "centrosome",
    correct: "golgi apparatus"
  },

  {
    question: "consists of 2 centrioles:",
    a: "centrosome",
    b: "flagella",
    c: "centromere",
    d: "sarcomere",
    correct: "centrosome"
  },

  {
    question: "Neutrophils are rich in:",
    a: "centrosomes",
    b: "nucleoulus",
    c: "cilia",
    d: "lysosomes",
    correct: "lysosomes"
  },

  {
    question: "cilia rich epithelial tissue:",
    a: "uterus and fallopian tubes",
    b: "trachea and oesophagus",
    c: "trachea and fallopian tube",
    d: "fallopian tube and oesophagus",
    correct: "trachea and fallopian tube"
  },

  {
    question: "A positive ion of any element is:",
    a: "proton",
    b: "cation",
    c: "anion",
    d: "electron",
    correct: "cation"
  },

  {
    question: "which are all acidic in pH:",
    a: "5, 6.5, 2, 7.5",
    b: "3, 6.5, 5, 7",
    c: "7.5, 9.5, 8.5, 9",
    d: "6, 2, 5, 6.5",
    correct: "6, 2, 5, 6.5"
  },

  {
    question: "Which will increase acidity of a solution:",
    a: "OH-",
    b: "HCO3-",
    c: "H+",
    d: "Na2+",
    correct: "H+"
  },

  {
    question: "Normal pH of blood plasma:",
    a: "7",
    b: "7.5",
    c: "6",
    d: "7.4",
    correct: "7.4"
  },

  {
    question: "The following is the most acidic:",
    a: "5",
    b: "7.1",
    c: "3.3",
    d: "9",
    correct: "3.3"
  },

  {
    question: "A buffer corrects acidosis by:",
    a: "releasing H+ ions",
    b: "removing H+ ions",
    c: "removing HCO3- ions",
    d: "Adding more CO2",
    correct: "removing H+ ions"
  },

  {
    question: "Under alkalosis the kidney tubules will:",
    a: "excrete H+ ions",
    b: "Retain H+ ions",
    c: "Retain HCO3-",
    d: "Retain Na+",
    correct: "Retain H+ ions"
  },

  {
    question: "Simple diffusion- particles move from:",
    a: "low to high concentration",
    b: "high to low concentration",
    c: "high to low using energy",
    d: "low to high using carrier proteins",
    correct: "high to low concentration"
  },

  {
    question: "Active transport involves the movement of particles from:",
    a: "strong to weak solution",
    b: "liquid to gas solution",
    c: "high to low conc using ATP",
    d: "Low to high conc using ATP",
    correct: "Low to high conc using ATP"
  },

  {
    question: "Pinocytosis is:",
    a: "cell eating",
    b: "cell drinking",
    c: "cell enlargement",
    d: "cell minimisation",
    correct: "cell drinking"
  },

  {
    question: "Organelle that organises the spindle during cell division:",
    a: "centromere",
    b: "centrosome",
    c: "nucleoulus",
    d: "cytokinesis",
    correct: "centrosome"
  },

  {
    question: "which is true:",
    a: "mitosis halves the diploid number of chromosomes",
    b: "crossing over takes place in prophase 2 of meiosis",
    c: "nucler membrane disintegrates in metaphase",
    d: "mitosis results in 2 identical daughter cells",
    correct: "mitosis results in 2 identical daughter cells"
  },

  {
    question: "The diploid number for a dog is 2n=78 At the end of mitosis the daughter cells will have:",
    a: "78",
    b: "39",
    c: "156",
    d: "46",
    correct: "78"
  },

  {
    question: "Sister chromosomes line up along the equator in:",
    a: "anaphase",
    b: "metaphase",
    c: "telophase",
    d: "interphase",
    correct: "metaphase"
  },

  {
    question: "which is true:",
    a: "meiosis maintains the diploid number of chromosomes in daughter cells",
    b: "replication of DNA takes place in interphase",
    c: "somatic cells are located in the genitals",
    d: "mitosis consists of 2 cell divisions",
    correct: "replication of DNA takes place in interphase"
  },

  {
    question: "Cytokinesis takes place when:",
    a: "at the beginning of cell division when the DNA replicates",
    b: "the chromosomes line up along the metapahase plate",
    c: "crossing over takes place in Prophase 1",
    d: "the plasma membrane constricts and separates the daughter cells",
    correct: "the plasma membrane constricts and separates the daughter cells"
  },

  {
    question: "Crossing over will:",
    a: "Half the diploid number of chromosomes",
    b: "complete the first division of meiosis",
    c: "result in a variation of gametes",
    d: "shorten the length of the chromosomes",
    correct: "result in a variation of gametes"
  },

  {
    question: "After meioisis each gamete of a cat will have (2n=38)",
    a: "19",
    b: "38",
    c: "76",
    d: "78",
    correct: "19"
  },

  {
    question: "The followng is not a connective tissue:",
    a: "blood",
    b: "muscle",
    c: "hyaline cartilage",
    d: "bone",
    correct: "muscle"
  },

  {
    question: "Protein that provides strength to connective tissue:",
    a: "keratin",
    b: "elastin",
    c: "collagen",
    d: "fibrinogen",
    correct: "collagen"
  },

  {
    question: "cell responsible for producing the matrix and protein fibres in cartilage:",
    a: "fibroblast",
    b: "macrophage",
    c: "adipocyte",
    d: "chondrocyte",
    correct: "chondrocyte"
  },

  {
    question: "The follwing stabilises a synovial joint:",
    a: "ligament",
    b: "tendon",
    c: "fascia",
    d: "voluntary muscle",
    correct: "ligament"
  },

  {
    question: "connective tissue able to withstand pressue from different directions:",
    a: "regular dense",
    b: "irregular dense",
    c: "loose",
    d: "areolar",
    correct: "irregular dense"
  },

  {
    question: "A store for fat soluble vitamins:",
    a: "hyaline tissue",
    b: "adipose tissue",
    c: "areolar connective tissue",
    d: "elastic cartilage",
    correct: "adipose tissue"
  },

  {
    question: "Sheath surrounding hyaline cartilage:",
    a: "periosteum",
    b: "pericardium",
    c: "perichondrium",
    d: "peripheral membrane",
    correct: "perichondrium"
  },

  {
    question: "fibrocartilage is present in the:",
    a: "costal cartilage",
    b: "epiglottis",
    c: "intervertebral discs",
    d: "tracheal rings",
    correct: "intervertebral discs"
  },

  {
    question: "elastic cartilage is present in the:",
    a: "epiglottis",
    b: "costal cartilage",
    c: "larynx",
    d: "epiphysis of bones",
    correct: "epiglottis"
  },

  {
    question: "Term that describes, layers of cells:",
    a: "simple",
    b: "stratified",
    c: "tissue",
    d: "transitional",
    correct: "stratified"
  },

  {
    question: "simple squamous epithelial tissue is located:",
    a: "kidney tubules",
    b: "bladder",
    c: "lung alveoli",
    d: "skin epidermis",
    correct: "lung alveoli"
  },

  {
    question: "tissue type in nephrons:",
    a: "columnar epithelium",
    b: "stratified squamous epithelium",
    c: "transitional epithelium",
    d: "cuboidal epithelium",
    correct: "cuboidal epithelium"
  },

  {
    question: "Goblet cell produce:",
    a: "enzymes",
    b: "mucous",
    c: "hormones",
    d: "sebum",
    correct: "mucous"
  },

  {
    question: "waterproofing skin protein:",
    a: "collagen",
    b: "myosin",
    c: "albumin",
    d: "keratin",
    correct: "keratin"
  },

  {
    question: "The following organs are lined with stratified squamous epithelium:",
    a: "oesophagus, skin, bladder",
    b: "Small intestine, nephron, skin",
    c: "skin, oesophagus, vagina",
    d: "capillaries, skin, vagina",
    correct: "skin, oesophagus, vagina"
  },

  {
    question: "Which is false:",
    a: "sweat glands are simple, coiled exocrine glands",
    b: "pituitary gland is endocrine",
    c: "exocrine glands are ductless",
    d: "endocrine glands secrete hormones into bloodstream",
    correct: "exocrine glands are ductless"
  },

  {
    question: "Epithelial tissue that lines the ureters:",
    a: "simple squamous",
    b: "transitional",
    c: "cuboidal",
    d: "ciliated columnar",
    correct: "transitional"
  },

  {
    question: "ciliated columnar epithelial tissue is located in the:",
    a: "spleen",
    b: "fallopian tube",
    c: "ureters",
    d: "capillaries",
    correct: "fallopian tube"
  },

  {
    question: "term describes the 'opposite side'",
    a: "ventral",
    b: "ipsilateral",
    c: "proximal",
    d: "contralateral",
    correct: "contralateral"
  },

  {
    question: "prefix meaning 'before'",
    a: "intra",
    b: "ante",
    c: "retro",
    d: "trans",
    correct: "ante"
  },

  {
    question: "suffic centesis means:",
    a: "pain",
    b: "deificency",
    c: "excess",
    d: "puncture and removal of fluid",
    correct: "puncture and removal of fluid"
  },

  {
    question: "Suffix 'phagia' means",
    a: "swallowing",
    b: "mentation",
    c: "displacement",
    d: "formation of",
    correct: "swallowing"
  },

  {
    question: "term for under side of front paw:",
    a: "plantar",
    b: "palmar",
    c: "ventral",
    d: "distal",
    correct: "palmar"
  },

  {
    question: "prefix 'dys' means:",
    a: "pus",
    b: "difficult",
    c: "beneath",
    d: "under",
    correct: "difficult"
  },

  {
    question: "Point of bone furthest form body:",
    a: "proximal",
    b: "medial",
    c: "caudal",
    d: "distal",
    correct: "distal"
  },

  {
    question: "longistudinal division of body into 2 halves:",
    a: "saggital plane",
    b: "median plane",
    c: "paramedian plane",
    d: "transverse plane",
    correct: "median plane"
  },

  {
    question: "Which one is not a component of the neuroglia:",
    a: "astrocyte",
    b: "schwann cell",
    c: "nephron",
    d: "micoglia",
    correct: "nephron"
  },

  {
    question: "The electrical nerve impulse is transmitted:",
    a: "dendrites to cell body",
    b: "axon terminal the the axon",
    c: "axon to the cell body",
    d: "syapse to the axon terminal",
    correct: "dendrites to cell body"
  },

  {
    question: "The following speeds up the transmission of an electrical pulse:",
    a: "myelin sheath, increase in diameter of axon",
    b: "myelin sheath, inc in length of axon",
    c: "unmyelinated neurones only",
    d: "unmyelinated and inc in diameter of axon",
    correct: "myelin sheath, increase in diameter of axon"
  },

  {
    question: "allows the neuron to receive oxygen",
    a: "schwann cekk",
    b: "myelin sheath",
    c: "nodes of ranvier",
    d: "dendrons",
    correct: "nodes of ranvier"
  },

  {
    question: "gap between the axon terminal and the dendrites of an adjacent neuron is called:",
    a: "synaptic vesicle",
    b: "synaptic cleft",
    c: "pre-synaptic membrane",
    d: "post- synaptic membrane",
    correct: "synaptic cleft"
  },

  {
    question: "ion needed for release of neurotransmitters into a synaptic cleft:",
    a: "Mg2+",
    b: "Fe2+",
    c: "HCO3-",
    d: "Ca2+",
    correct: "Ca2+"
  },

  {
    question: "The acion potential is not generated unless the stimulus reaches the:",
    a: "max level",
    b: "min level",
    c: "refractory level",
    d: "threshold level",
    correct: "threshold level"
  },

  {
    question: "The CNS consists of:",
    a: "brain",
    b: "brain and spinal cord",
    c: "brain and spinal nerves",
    d: "brain and cranial nerves",
    correct: "brain and spinal cord"
  },

  {
    question: "Smooth muscle is not contained in:",
    a: "diaphragm",
    b: "aarterial walls",
    c: "oesophageal walls",
    d: "biceps brachii",
    correct: "biceps brachii"
  },

  {
    question: "the uit of contraction in a voluntary muscle is:",
    a: "sarcomere",
    b: "sarcolemma",
    c: "sarcoplasm",
    d: "sliding filament",
    correct: "sarcomere"
  },

  {
    question: "The following are striated",
    a: "voluntary and cardiac",
    b: "involuntary and cardiac",
    c: "smooth and voluntary",
    d: "smooth",
    correct: "voluntary and cardiac"
  },

  {
    question: "following muscle cell is branched:",
    a: "smooth",
    b: "striated",
    c: "cardiac",
    d: "involuntary",
    correct: "cardiac"
  },

  {
    question: "The following is mutlinucleated:",
    a: "cardiac",
    b: "smooth",
    c: "involuntary",
    d: "voluntary",
    correct: "voluntary"
  },

  {
    question: "the following is under voluntary control;",
    a: "skeletal",
    b: "cardiac",
    c: "smooth",
    d: "striated",
    correct: "smooth"
  },

  {
    question: "sliding filament theory:",
    a: "actin slides between mysosin filaments",
    b: "myosin slides between actin filaments",
    c: "calcium and vitamin K are required for contraction",
    d: "both filaments slide",
    correct: "actin slides between mysosin filaments"
  },

  {
    question: "These specialist nerve fibres tranmsit the electrical impulses up the ventricular walls:",
    a: "bundle of His",
    b: "sino-atrial node",
    c: "collagen fibres",
    d: "Purkinje fibres",
    correct: "Purkinje fibres"
  },

  {
    question: "Fascicles are grouped and surrounded by:",
    a: "endomysium",
    b: "epimysium",
    c: "perimysium",
    d: "sarcolemma",
    correct: "epimysium"
  },

  {
    question: "intercalated discs are located in",
    a: "smooth muscle",
    b: "involuntary muscle",
    c: "voluntary muscle",
    d: "cardiac muscle",
    correct: "cardiac muscle"
  },

  {
    question: "cardiac muscle is located within the:",
    a: "peritoneum",
    b: "myocardium",
    c: "myometrium",
    d: "myoepithelium",
    correct: "myocardium"
  },

  {
    question: "Smooth muscle is innervated by the:",
    a: "CNS",
    b: "motor neurons",
    c: "sensory neurons",
    d: "ANS",
    correct: "ANS"
  },

  {
    question: "The stratum and stratum lucidum are located in the:",
    a: "skin dermis",
    b: "hypodermis",
    c: "skin epidermis",
    d: "subcutaneous layer",
    correct: "skin epidermis"
  },

  {
    question: "Dermal papillae are involved in the formation of:",
    a: "sweat glands",
    b: "sebaceous glands",
    c: "arrector pili muscles",
    d: "hair follicles",
    correct: "hair follicles"
  },

  {
    question: "These hairs form the waterproofing top coat:",
    a: "wool hairs",
    b: "tylotrich hairs",
    c: "vibrissae",
    d: "guard hairs",
    correct: "guard hairs"
  },

  {
    question: "the dogs claw covers the:",
    a: "ungual process",
    b: "second metatarsal",
    c: "hair cone",
    d: "second phalanx",
    correct: "ungual process"
  },

  {
    question: "This gland is only found in cats:",
    a: "circum-oral glands",
    b: "circum-anal glands",
    c: "meibomian glands",
    d: "harderian glands",
    correct: "circum-oral glands"
  },

  {
    question: "Modified sebaceous glands only found in dogs:",
    a: "circum-anal glands",
    b: "circum-oral glands",
    c: "tarsal glands",
    d: "ceruminous glands",
    correct: "circum-anal glands"
  },

  {
    question: "Gland that produces the oily component of tears:",
    a: "sudoriferous gland",
    b: "preen gland",
    c: "meibomian gland",
    d: "lacrimal",
    correct: "meibomian gland"
  },

  {
    question: "these feathers provide a smooth, streamlined surface:",
    a: "filopumes",
    b: "downy feathers",
    c: "contour feathers",
    d: "secondary feathers",
    correct: "contour feathers"
  },

  {
    question: "This gland produces an oily secretion to waterproof feathers:",
    a: "haderian gland",
    b: "uropygial gland",
    c: "apocrine gland",
    d: "eccrine gland",
    correct: "uropygial gland"
  },

  {
    question: "The central shaft of a feather:",
    a: "covert",
    b: "sheath",
    c: "rachis",
    d: "pin",
    correct: "rachis"
  },

  {
    question: "The junction between the hairline and the hoof which produces the horn tissue:",
    a: "the frog",
    b: "the bars",
    c: "the coronary band",
    d: "the white line",
    correct: "The coronary band"
  },

  {
    question: "Shiny, waterproof material on the outside of the hoof",
    a: "the coronet",
    b: "the digital cushion",
    c: "the corium",
    d: "the periople",
    correct: "The periople"
  },

  {
    question: "The distal phalanx in a horse, which is protected by the hoof",
    a: "the navicular bone",
    b: "the cannon bone",
    c: "the short pastern",
    d: "the pedal bone",
    correct: "The pedal bone"
  },

  {
    question: "The sensitive dermis of the horse foot which interdigitates with the horn of the hoof",
    a: "the corium",
    b: "the coronet",
    c: "the coronary band",
    d: "the waterline",
    correct: "The corium"
  },

  {
    question: "In which layer of the epidermis are new cells manufactured",
    a: "stratum granulosum",
    b: "stratum lucidum",
    c: "stratum corneum",
    d: "stratum germinativum",
    correct: "Stratum germinativum"
  },

  {
    question: "In which layer of the skin are the sensory nerve endings located",
    a: "hypodermis",
    b: "epidermis",
    c: "dermis",
    d: "subcutaneous",
    correct: "dermis"
  },

  {
    question: "Where do the ducts of the sebaceous glands open into",
    a: "Surface of the skin",
    b: "hair follicle",
    c: "sweat glands",
    d: "blood capillary",
    correct: "hair follicle"
  },

  {
    question: "Where are ceremonies glands located",
    a: "opening into the eyelids",
    b: "around the anus",
    c: "associated with hair follicles",
    d: "external ear canal",
    correct: "external ear canal"
  },

  {
    question: "How many pads are on the hind paw of a dog",
    a: "7",
    b: "4",
    c: "5",
    d: "6",
    correct: "5"
  },

  {
    question: "Which of the following is not a function of the integument",
    a: "Secretion of pheromones",
    b: "production of vitamin E",
    c: "Protection against pathogenic bacteria",
    d: "thermoregulation",
    correct: "production of vitamin E"
  }
];

const questions = [];

for (var i = 0; i < reset.length; i++) {
  questions.push(reset[i]);
}

const results = {
  correctQuestions: [],
  incorrectQuestions: [],
  correctTotal: 0,
  incorrectTotal: 0
};

router.get('/', function (req, res) {
  res.redirect('questions/1');
});

router.get('/questions/:id', function (req, res) {
  const question = shuffle(questions).pop();

  if (question) {
    question.number = parseInt(req.params.id, 10);
    question.nextNumber = question.number + 1;
    res.render('questions.html', {question});
  } else {
    res.redirect('/results');
  }
});

router.post('/questions/:id', function (req, res) {
  const questionNumber = parseInt(req.body.number, 10);
  const nextQuestion = questionNumber + 1;
  const correct = req.body.correct;
  const answer = req.body.answer;

  if (answer === correct) {
    results.correctTotal++;
    results.correctQuestions.push({question: req.body.question, answer: req.body.answer, correct: req.body.correct});
  } else {
    results.incorrectTotal++;
    results.incorrectQuestions.push({question: req.body.question, answer: req.body.answer, correct: req.body.correct});
  }

  res.redirect(nextQuestion);
});

router.get('/results', function (req, res) {
  var total = results.correctTotal + results.incorrectTotal;
  results.percentage = Math.round((results.correctTotal / total) * 100);
  res.render('results.html', {results});
});

router.get('/reset', function (req, res) {
  for (var i = 0; i < reset.length; i++) {
    questions.push(reset[i]);
  }

  results.correctQuestions = [];
  results.incorrectQuestions = [];
  results.correctTotal = 0;
  results.incorrectTotal = 0;

  res.redirect('/');
});

module.exports = router;

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

