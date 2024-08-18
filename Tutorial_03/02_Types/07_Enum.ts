//! Typescript Enum

/* 
//* An enums is a group of named constant values. Enum stands for enumerated type.


*/


//? Declaring an enum 

enum myAppUser_ {
    rohim,
    korim,
    salam,
    borkot,
    jobbar
};  //* Every elements of enum is a constant value.

// * Am example use of enum 
enum Weekday {
    sat = 1,
    sun,
    mon,
    tue,
    wed,
    thr,
    fri
}


//? Create a function that will use the weekday type to predict is it weekend or not


function isHoliday(day : Weekday){
    let today_weekend : boolean;
    switch(day){
        case Weekday.fri:
        case Weekday.sat:
            today_weekend = true;
            break;
    default:
        today_weekend = false;
        break;        
    }
    return today_weekend;
} 

console.log(isHoliday(Weekday.mon));


//? A practical use of enum

//* Do use an enum when you have a small set of fixed values that are closely related and known at compile time.

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request = {
    id : 1,
    status : ApprovalStatus.approved,
    description : `Please Approved this request`
}


if (request.status === ApprovalStatus.approved){
    console.log(`Send email to the Applicant...`);
    
}