export class dept{
    name:string
    image:string
    description:string
    title:string
}

export class underblock{
    name:string
    field:string
}

export class doc{
    name:string
    image:string
    description:string
    subtitle:string
}

export const department:dept[] = [
    {
        name:'Dental',
        image:'/assets/images/my-icons-collection/png/001-teeth.png',
        description:'Dentistry is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity, commonly in the dentition but also the oral mucosa, and of adjacent and related structures and tissues, particularly in the maxillofacial (jaw and facial) area.Although primarily associated with teeth among the general public.',
        title:'/assets/images/my-icons-collection/png/tooth.png'
    },
    {
        name:'Cardiology',
        image:'/assets/images/my-icons-collection/png/002-heart.png',
        description:'Cardiology is a branch of medicine dealing with disorders of the heart as well as parts of the circulatory system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.  Physicians who specialize in this field of medicine are called cardiologists, a specialty of internal medicine. ',
        title:'/assets/images/my-icons-collection/png/cardiology.png'
    },
    {
        name:'Neurology',
        image:'/assets/images/my-icons-collection/png/003-mental.png',
        description:'Neurology, is a branch of medicine dealing with disorders of the nervous system. Neurology deals with the diagnosis and treatment of all categories of conditions and disease involving the central and peripheral nervous systems (and their subdivisions, the autonomic and somatic nervous systems), including their coverings, blood vessels, and all effector tissue, such as muscle.',
        title:'/assets/images/my-icons-collection/png/neurology3.png'
    },
    {
        name:'Opthamology',
        image:'/assets/images/my-icons-collection/png/004-eye.png',
        description:'Ophthalmology is a branch of medicine and surgery (both methods are used) that deals with the anatomy, physiology and diseases of the eyeball and orbit. An ophthalmologist is a specialist in medical and surgical eye disease. Their credentials include a doctorate degree in medicine, followed by an additional four years of Ophthalmology residency training.',
        title:'/assets/images/my-icons-collection/png/eye.png'
    }
]


export const under:underblock[] =  [
    {
        name:'Detecting Tumours',
        field:'Tumour is an area where there is abnormal swelling of jaw'
    },
    {
        name:'Bone Fractures',
        field:'Bone fractures are the areas where the bone is broken'
    },
    {
        name:'Cavities in teeth',
        field:'Cavities are the black areas formed on the teeth.'
    },
    {
        name:'Bone loss',
        field:'Bone is a problem caused primarily due to wear and tear of teeth'
    }
]

export const doctor:doc[]=[
    {
        name:'Dr.Murthy',
        image:'/assets/images/doctor-2.jpg',
        description:'What he says is about dental',
        subtitle:'Doctorate'
    },
    {
        name:'Dr.Murthy',
        image:'/assets/images/doctor-2.jpg',
        description:'What he says is about dental',
        subtitle:'Doctorate'
    },
    {
        name:'Dr.Murthy',
        image:'/assets/images/doctor-2.jpg',
        description:'What he says is about dental',
        subtitle:'Doctorate'
    },
    {
        name:'Dr.Murthy',
        image:'/assets/images/doctor-2.jpg',
        description:'What he says is about dental',
        subtitle:'Doctorate'
    }
]