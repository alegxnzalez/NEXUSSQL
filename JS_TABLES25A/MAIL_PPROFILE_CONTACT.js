// MAIL_PPROFILE_CONTACT.js

window.MAIL_PPROFILE_CONTACT = {
  "tables": {
    "MAIL_PPROFILE_CONTACT": {
      "columns": {
        "MAIL_PRIORITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MAIL_PRIORITY_PROFILE",
          "info": "Profile ID "
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "Contact ID"
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
