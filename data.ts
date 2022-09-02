interface Movies {
    id: number;
    movie: string;
    language: Language;
    gender: Gender;
    year: Year;
  }
  
  export enum Language {
    ENGLISH = "English",
    SPANISH= "Spanish",
    SPANISHOFCOURSE = "Spanish of course",
  }
  
  export enum Gender {
    COMEDY = "English",
    ROMANCE = "Spanish",
    HORROR = "Spanish of course",
  }
  
  export enum Year {
    OLD = "Old",
    NEW = "New",
    Waiting = "Waiting ",
  }
  export const Movies: Movies[] = [
    {
      id: 1,
      movie: "Bad Boys ",
      language: Language.ENGLISH,
      gender: Gender.COMEDY,
      year: Year.OLD,
    },
    {
        id: 2,
        movie: "Romeo and Juliet",
        language: Language.ENGLISH,
        gender: Gender.ROMANCE,
        year: Year.OLD,
    },
    {
        id: 3,
        movie: "I know you got goed taste",
        language: Language.SPANISHOFCOURSE,
        gender: Gender.ROMANCE,
        year: Year.Waiting,
    },
    {
        id: 4,
        movie: "Nun (Good luck!!)",
        language: Language.ENGLISH,
        gender: Gender.HORROR,
        year: Year.NEW,
    },
    {
        id: 5,
        movie: "La llorona (Good luck!!)",
        language: Language.SPANISH,
        gender: Gender.HORROR,
        year: Year.NEW,
    },
    {
        id: 6,
        movie: "Shift",
        language: Language.ENGLISH,
        gender: Gender.COMEDY,
        year: Year.OLD,
    },
    {
        id: 7,
        movie: "Vacation",
        language: Language.ENGLISH,
        gender: Gender.COMEDY,
        year: Year.OLD,
    },
  ];