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
      disciplines: "",
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

    allClass: [
      {
        id: "",
        course: "",
        time: "",
        year: "",
        disciplines: "",
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
      }
    ],
    
    subjects: [
      {
        id: "",
        titleType: "",
        title: "",
        module: "",
        description: "", 
        toDownload: false,
        subjectsCreatedNumber: 0,
        
        comments: [
        {
          likes: 0,
          name: "",
          teacher: false,
          avatar: "",
          comment: "",
          commented_at: "",
          responses: [
            {
              likes: 0,
              name: "",
              teacher: false,
              avatar: "",
              commentResponse: "",
              responded_at: ""
            }
          ]
        }
      ],

        userId: "",
        name: "",
        teacher: false,
        avatar: "",
        classId: "",
        created_at: "",
        updated_at: ""
      }
    ],

    subject: {
      id: "",
      titleType: "",
      title: "",
      module: "",
      description: "",
      toDownload: false,
      subjectsCreatedNumber: 0,
      
      comments: [
        {
          likes: 0,
          name: "",
          teacher: false,
          avatar: "",
          comment: "",
          commented_at: "",
          responses: [
            {
              likes: 0,
              name: "",
              teacher: false,
              avatar: "",
              commentResponse: "",
              responded_at: ""
            }
          ]
        }
      ],
      
      userId: "",
      name: "",
      teacher: false,
      avatar: "",
      classId: "",
      created_at: "",
      updated_at: ""
    }
  }
}

export default INICIAL_STATE