// GTM_TR_OTHER_CONTROL.js

window.GTM_TR_OTHER_CONTROL = {
  "tables": {
    "GTM_TR_OTHER_CONTROL": {
      "description": "Table to store Control Screening details for the Control Category - 'OTHER'",
      "columns": {
        "GTM_TR_OTHER_CONTROL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the GTM trade transaction line control code for other control screening."
},
        "GTM_TR_OTHER_CONTROL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the GTM trade transaction line control code for other control screening."
},
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line."
},
        "GTM_COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "The GID for the compliance rule set group used to assign the control type/control code for other control screening to the GTM trade transaction line."
},
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for the compliance rule used to assign the control type/control code for other control screening to the GTM trade transaction line."
},
        "GTM_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The GID for the control type assigned to the GTM trade transaction line for other control screening."
},
        "CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The control code assigned to the GTM trade transaction line."
},
        "AUTHORIZATION_TEXT": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "The authorization information entered by a user to release the control assigned to the GTM trade transaction line during other control screening."
},
        "AUTHORIZATION_ADDED_BY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user who submitted the authorization."
},
        "AUTHORIZATION_ADDED_ON": {
          "type": "DATE",
          "nullable": true,
          "info": "The date the authorization was submitted."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored."
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user."
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert."
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the user who updated the other control screening data."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent update for the other control screening data."
},
        "GTM_EXCEPTION_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The GID for the exception control type assigned to the GTM trade transaction line during other control screening."
},
        "GTM_EXCEPTION_CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The exception control code assigned to the GTM trade transaction line during other control screening."
},
        "EXCEPTION_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for the compliance rule used to assign the exception control type/control code to the GTM trade transaction line for other control screening."
}
      },
      "fk_tables": []
    }
  }
};