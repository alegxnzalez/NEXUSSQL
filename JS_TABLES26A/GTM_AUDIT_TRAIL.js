// GTM_AUDIT_TRAIL.js

window.GTM_AUDIT_TRAIL = {
  "tables": {
    "GTM_AUDIT_TRAIL": {
      "description": "Maintains audit information for GTM services.",
      "columns": {
        "GTM_AUDIT_TRAIL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "GTM_AUDIT_TRAIL_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "GL_USER_GID": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "AUDIT_TIME": {
          "type": "DATE",
          "nullable": true
},
        "AUDIT_SOURCE": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "values": [
                    "UI",
                    "INT"
          ]
},
        "GTM_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "GTM_SERVICE"
},
        "EXT_REF_ID": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "EXT_SOURCE_ID": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "XML_CONTENT": {
          "type": "CLOB",
          "nullable": true
},
        "AUDIT_TRAIL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "AUDIT_TRAIL"
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
},
        "FIRST_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The first name of the party used for ad hoc restricted party screening."
},
        "LAST_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "The last name of the party used for ad hoc restricted party screening."
},
        "COMPANY_NAME": {
          "type": "VARCHAR2(360)",
          "nullable": true,
          "info": "The company name of the party used for ad hoc restricted party screening."
},
        "COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The country of the party used for ad hoc restricted party screening."
},
        "GTM_SERVICE_PREF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The unique GID for the service preference used for ad hoc restricted party screening."
}
      },
      "fk_tables": [
        "GTM_AUDIT_TRAIL_ATTRIBUTE"
]
    }
  }
};