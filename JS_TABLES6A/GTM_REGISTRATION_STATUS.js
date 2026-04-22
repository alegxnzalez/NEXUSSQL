// GTM_REGISTRATION_STATUS.js

window.GTM_REGISTRATION_STATUS = {
  "tables": {
    "GTM_REGISTRATION_STATUS": {
      "columns": {
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
        },
        "GTM_REGISTRATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_REGISTRATION"
        },
        "STATUS_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "STATUS_VALUE"
        },
        "STATUS_VALUE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "STATUS_VALUE"
        }
      },
      "fk_tables": []
    }
  }
};
