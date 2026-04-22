// OR_INVOLVED_PARTY_ADDRESS.js

window.OR_INVOLVED_PARTY_ADDRESS = {
  "tables": {
    "OR_INVOLVED_PARTY_ADDRESS": {
      "columns": {
        "ORDER_RELEASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_INV_PARTY",
          "info": "The GID for the ship unit associated with the order release."
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_INV_PARTY",
          "info": "The involved party qualifier GID."
},
        "INVOLVED_PARTY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_INV_PARTY",
          "info": "The involved party contact for the qualifier listed on the order release."
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "ORDER_RELEASE_INV_PARTY",
          "info": "The communication method for the involved party listed on the order release."
},
        "LINE_SEQUENCE": {
          "type": "NUMBER(10)",
          "nullable": false,
          "key_value": true,
          "info": "The line sequence (key) for the involved party on the order release."
},
        "OVERRIDE_ADDRESS_LINE": {
          "type": "VARCHAR2(1000)",
          "nullable": true,
          "info": "The address line that is to be used for this involved party on an order release in place (Overridden) of the one on the contact table for the involved party."
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
          "info": "The user ID of the data update user."
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update."
}
      },
      "fk_tables": []
    }
  }
};