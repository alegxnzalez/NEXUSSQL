// GTM_AUDIT_TRAIL.js

window.GTM_AUDIT_TRAIL = {
  "tables": {
    "GTM_AUDIT_TRAIL": {
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
        }
      },
      "fk_tables": [
        "GTM_AUDIT_TRAIL_ATTRIBUTE"
      ]
    }
  }
};
