// GTM_CRULE_DOCUMENT_SUBSCRIBER.js

window.GTM_CRULE_DOCUMENT_SUBSCRIBER = {
  "tables": {
    "GTM_CRULE_DOCUMENT_SUBSCRIBER": {
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
        "GTM_COMPLIANCE_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_COMPLIANCE_RULE"
},
        "DOCUMENT_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "DOCUMENT_DEF"
},
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT"
},
        "AS_INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INVOLVED_PARTY_QUAL"
}
      },
      "fk_tables": []
    }
  }
};