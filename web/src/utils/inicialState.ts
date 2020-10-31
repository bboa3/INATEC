const INICIAL_STATE = {
  data: {
    user: {
      id: "",
      name: "",
      username: "",
      email: "",
      phone: "",
      gender: "",
      avatar: "",
      teacher: false,
      created_at: "",
      updated_at: "",
    },
    uClass: {
      id: "",
      course: "",
      time: "",
      year: "",
      schedule: {
        monday: [
          {
            name: "",
            discipline: "",
            time: ""
          }
        ],
        tuesday: [
          {
            name: "",
            discipline: "",
            time: ""
          }
        ],
        wednesday: [
          {
            name: "",
            discipline: "",
            time: ""
          }
        ],
        thursday: [
          {
            name: "",
            discipline: "",
            time: ""
          }
        ],
        friday: [
          {
            name: "",
            discipline: "",
            time: ""
          }
        ],
        saturday: [
          {
            name: "",
            discipline: "",
            time: ""
          }
        ]
      },
    },
    
    subjects: [
      {
        id: "",
        titleType: "",
        title: "",
        module: "",
        pdf: "",
        description: "",
        
        comments: [
          {
            likes: 0,
            userId: "",
            comment: "",
            commented_at: "",
            responses: [
              {
                likes: 0,
                userId: "",
                commentResponse: "",
              }
            ]
          }
        ],

        userId: "",
        classId: "",
        created_at: "",
        updated_at: ""
      }
    ]
  }
}

export default INICIAL_STATE