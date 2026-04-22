// INVOICE_INVOLVED_PARTY_BOV.js

window.INVOICE_INVOLVED_PARTY_BOV = {
  "tables": {
    "INVOICE_INVOLVED_PARTY_BOV": {
      "columns": {
        "INVOICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "INVOLVED_PARTY_QUAL_XID": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "INVOLVED_PARTY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false
        },
        "CONTACT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LOCATION_NAME": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "LOCATION_ADDRESS": {
          "type": "VARCHAR2(4000)",
          "nullable": true
        },
        "FIRST_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "LAST_NAME": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "JOB_TITLE": {
          "type": "VARCHAR2(60)",
          "nullable": true
        },
        "EMAIL_ADDRESS": {
          "type": "VARCHAR2(2000)",
          "nullable": true
        },
        "PHONE1": {
          "type": "VARCHAR2(80)",
          "nullable": true
        },
        "PHONE2": {
          "type": "VARCHAR2(80)",
          "nullable": true
        },
        "FAX": {
          "type": "VARCHAR2(80)",
          "nullable": true
        },
        "LANGUAGE_SPOKEN": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "IS_PRIMARY_CONTACT": {
          "type": "CHAR(1)",
          "nullable": false
        },
        "TELEX": {
          "type": "VARCHAR2(30)",
          "nullable": true
        },
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "NOTES": {
          "type": "VARCHAR2(2000)",
          "nullable": false
        },
        "GL_USER_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "RECIPIENT_DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
