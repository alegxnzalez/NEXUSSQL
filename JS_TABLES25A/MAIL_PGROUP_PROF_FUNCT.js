// MAIL_PGROUP_PROF_FUNCT.js

window.MAIL_PGROUP_PROF_FUNCT = {
  "tables": {
    "MAIL_PGROUP_PROF_FUNCT": {
      "columns": {
        "MAIL_PGROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "MAIL_PGROUP_PROFILE"
        },
        "NOTIFY_FUNCTION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "NOTIFY_FUNCTION"
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
