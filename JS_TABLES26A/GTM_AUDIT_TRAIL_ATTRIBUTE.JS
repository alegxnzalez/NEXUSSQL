// GTM_AUDIT_TRAIL_ATTRIBUTE.js

window.GTM_AUDIT_TRAIL_ATTRIBUTE = {
  "tables": {
    "GTM_AUDIT_TRAIL_ATTRIBUTE": {
      "description": "Specifies attributes for the GTM Audit Trail.  Attributes are unqualified.",
      "columns": {
        "GTM_AUDIT_TRAIL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "GTM_AUDIT_TRAIL"
},
        "ATTRIBUTE_ID": {
          "type": "VARCHAR2(120)",
          "nullable": false,
          "key_value": true
},
        "ATTRIBUTE_VALUE": {
          "type": "VARCHAR2(255)",
          "nullable": false,
          "key_value": true
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