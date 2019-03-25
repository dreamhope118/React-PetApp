export const states = ["AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"];
export const countries = ["United States"];

const SELECTS = {
  states,
  countries,
  employmentStatus: ['Self-Employed', 'Employed', 'Unemployed', 'Retired'],
  pronoun: ['He', 'She', 'They', 'Prefer not to say'],
  familyStatus: ['Single', 'Married/Domestic Partner', 'Family With Children'],
  years: ['<1 yr', '1-2 years', '3+ years'],
  relationship: ['Spouse/Partner','Parent','Sibling','Friend','Roommate'],
  refRelations: ['Parent', 'Sibling', 'Family', 'Friend', 'Neighbor', 'Coworker'],
  species: ['Dog','Cat','Horse','Bird','Reptile','Other'],
  sex: ['Male, Neutered','Female, Spayed','Male, Unaltered','Female, Unaltered'],
  age: ['<6 months','6 months to 1 yr','1-3 years old','5-8 years old','9+ years old'],
  homeKind: ['Apartment/Condo', 'Co-Op', 'Brownstone', 'Townhouse', 'Single Family Home'],
  yard: ['Yes, it’s fenced','Yes, it’s unfenced','No fence'],
  dogLive: ['Inside','Outside','Kennel'],
  dogAlone: ['crated','free in the house','outside'],
  energyLevel: ['ouch potato','moderate/active','high energy']
}

const makeOptions = s => 
  Object.entries(SELECTS)
    .reduce((acc, [key, elements]) => {
      
      acc[key] = elements.map((e, i) => ({
        value: i,
        label: e,
      }));

      return acc;
    }, {});

export default makeOptions(SELECTS);