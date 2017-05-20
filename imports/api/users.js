import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

// validateNewUser function will be called
// before createUser is called.
// if we return false, createUser will not be called
Accounts.validateNewUser((user) => {
  const email = user.emails[0].address;

  new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate({
    email
  });

  return true;
});
