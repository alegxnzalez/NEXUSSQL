// GTM_TR_CONTROL_SCREEN.js

window.GTM_TR_CONTROL_SCREEN = {
  "tables": {
    "GTM_TR_CONTROL_SCREEN": {
      "columns": {
        "GTM_TR_CONTROL_SCREEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the GTM trade transaction line control code."
},
        "GTM_TR_CONTROL_SCREEN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the GTM trade transaction line control code."
},
        "GTM_TRANSACTION_LINE_GID": {
          "type": "VARCHAR2(201)",
          "nullable": false,
          "foreign_key": "GTM_TRANSACTION_LINE",
          "info": "The GID for the GTM trade transaction line."
},
        "GTM_COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "The GID for the compliance rule set group used to assign the control type/control code to the GTM trade transaction line."
},
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for the compliance rule used to assign the control type/control code to the GTM trade transaction line."
},
        "GTM_EXCEPTION_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The GID for the exception control type assigned to the GTM trade transaction line."
},
        "GTM_EXCEPTION_CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The exception control code assigned to the GTM trade transaction line."
},
        "GTM_REGULATION_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE",
          "info": "The GID for the regulation reference associated with the control assigned to the GTM trade transaction line."
},
        "GTM_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The GID for the control type assigned to the GTM trade transaction line."
},
        "CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The control code assigned to the GTM trade transaction line."
},
        "LICENSE_NUMBER": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "The license number associated with the license used to release a control on the GTM trade transaction line."
},
        "LICENSE_QUANTITY": {
          "type": "NUMBER",
          "nullable": true,
          "info": "The quantity from the associated license used to release a control on the GTM trade transaction line."
},
        "LICENSE_UOM": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measured for the quantity from the associated license used to release a control on the GTM trade transaction line."
},
        "LICENSE_ADDED_BY": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Specifies who added the license to the GTM trade transaction line."
},
        "LICENSE_ADDED_ON": {
          "type": "DATE",
          "nullable": true,
          "info": "Specifies the date on which the license is added to the GTM trade transaction line."
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
          "info": "The user ID of the user who updated the control screening data."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent update for the control screening data."
},
        "GTM_CONTROL_CATEGORY": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CATEGORY",
          "info": "The control category associated with the control type/control code assigned to the GTM trade transaction line."
},
        "GTM_REGISTRATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGISTRATION",
          "info": "The GID for the registration associated with the GTM trade transaction line."
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "The GID for the involved party associated with the control code assigned to the GTM trade transaction line."
},
        "EXCEPTION_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for the compliance rule used to assign the exception control type/control code to the GTM trade transaction line."
},
        "GTM_AUTHORIZATION_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_AUTHORIZATION_TYPE",
          "info": "The authorization type of the  license number associated with the license used to release a control on the GTM trade transaction line."
}
      },
      "fk_tables": []
    }
  }
};