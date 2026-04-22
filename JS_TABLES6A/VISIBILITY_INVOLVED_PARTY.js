// VISIBILITY_INVOLVED_PARTY.js

window.VISIBILITY_INVOLVED_PARTY = {
  "tables": {
    "VISIBILITY_INVOLVED_PARTY": {
      "columns": {
        "VISIBILITY_INVOLVED_PARTY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Party ID "
        },
        "VISIBILITY_INVOLVED_PARTY_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "PARTY_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Name of the party. "
        },
        "ADDRESS_LINE_1": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Address line 1. "
        },
        "ADDRESS_LINE_2": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "Address line 2 "
        },
        "ADDRESS_LINE_3": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "CITY": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "City name. "
        },
        "STATE_PROVINCE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "State or province name. "
        },
        "COUNTRY": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Country name. "
        },
        "POSTAL_CODE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Postal code."
        },
        "P_DATE_KEY": {
          "type": "NUMBER()",
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
      "fk_tables": []
    }
  }
};
