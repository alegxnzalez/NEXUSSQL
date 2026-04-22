// GTM_CONTROL_CODE.js

window.GTM_CONTROL_CODE = {
  "tables": {
    "GTM_CONTROL_CODE": {
      "columns": {
        "GTM_CONTROL_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_CONTROL_TYPE"
},
        "CONTROL_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_REGULATION_REFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_REGULATION_REFERENCE"
},
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true
},
        "PRECEDENCE": {
          "type": "NUMBER(3)",
          "nullable": true
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
      "fk_tables": [
        "GTM_COMPLIANCE_RULE",
        "GTM_CONTACT_ST_SCREEN",
        "GTM_LICENSE_CONTROL_TYPE_CODE",
        "GTM_RULE_RESTRICTION",
        "GTM_TRANS_LINE_LICENSE",
        "GTM_TR_CONTROL_SCREEN",
        "GTM_TR_OTHER_CONTROL",
        "GTM_TR_REPORTING",
        "GTM_TR_SANCTION"
]
    }
  }
};