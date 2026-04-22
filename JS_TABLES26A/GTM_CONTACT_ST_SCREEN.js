// GTM_CONTACT_ST_SCREEN.js

window.GTM_CONTACT_ST_SCREEN = {
  "tables": {
    "GTM_CONTACT_ST_SCREEN": {
      "columns": {
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
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
},
        "GTM_CONTACT_ST_SCREEN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the GTM sanctioned territory screening. If sanctioned territory screening has taken place via either Trade Compliance Screening or the Sanctioned Territory Screening action, the results will be stored here."
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CONTACT",
          "info": "The GID for the sanction territory screened contact."
},
        "CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The GID for the GTM control type. The control type is linked to the compliance rule."
},
        "CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_CONTROL_CODE",
          "info": "The control type and control code are linked to the compliance rule."
},
        "REGULATION_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE",
          "info": "The GID for the GTM regulation reference. The regulation reference is related directly to a compliance rule."
},
        "GTM_CONTACT_ST_SCREEN_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the GTM sanctioned territory screening. If sanctioned territory screening has taken place via either Trade Compliance Screening or the Sanctioned Territory Screening action, the results will be stored here."
},
        "COMPLIANCE_RULE_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE_GROUP",
          "info": "The GID for the GTM compliance rule group. The compliance rule group is considered an optional input for sanctioned territory screening. If no compliance rule group is provided, the service preference given in user preference is considered for getting compliance rule group information. If a user preference has not been designated, screening will be done against all sanction rules using the Cumulative algorithm."
},
        "COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_COMPLIANCE_RULE",
          "info": "The GID for the GTM compliance rule. You can configure screening to fit any combination of rules or policies that you deem to be necessary. Compliance rules can be added to a rule set, rule sets can be added to rule set groups, and rule set groups can be combined into a compliance policy which is then used in transaction screening."
}
      },
      "fk_tables": []
    }
  }
};