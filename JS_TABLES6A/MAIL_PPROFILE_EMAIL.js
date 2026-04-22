// MAIL_PPROFILE_EMAIL.js

window.MAIL_PPROFILE_EMAIL = {
  "tables": {
    "MAIL_PPROFILE_EMAIL": {
      "columns": {
        "MAIL_PRIORITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MAIL_PRIORITY_PROFILE",
          "info": "Profile ID "
        },
        "EMAIL_ADDRESS": {
          "type": "VARCHAR2(2000)",
          "nullable": false,
          "key_value": true,
          "info": "Ad-hoc e-mail address"
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
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
