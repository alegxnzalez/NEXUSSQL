// SHIPMENT_INVOLVED_PARTY.js

window.SHIPMENT_INVOLVED_PARTY = {
  "tables": {
    "SHIPMENT_INVOLVED_PARTY": {
      "columns": {
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "SHIPMENT",
          "info": "The GID for the ship unit associated with the shipment."
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "The involved party qualifier identifier."
},
        "INVOLVED_PARTY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT",
          "info": "The involved party contact for the qualifier listed on the shipment."
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD",
          "info": "The communication ,method for the involved party listed on the shipment."
},
        "OVERRIDE_LOCATION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "The location name that is to be used for this involved party on a shipment in place of (overridden) the one on the location table."
},
        "OVERRIDE_CITY": {
          "type": "VARCHAR2(40)",
          "nullable": true,
          "info": "The location city that is to be used for this involved party on a shipment in place of (overridden) the one on the location table."
},
        "OVERRIDE_PROVINCE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "The location providence  that is to be used for this involved party on a shipment in place of (overridden) the one on the location table"
},
        "OVERRIDE_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true,
          "info": "The location providence code that is to be used for this involved party on a shipment in place of (overridden) the one on the location table"
},
        "OVERRIDE_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The location country code that is to be used for this involved party on a shipment in place of (overridden) the one on the location table"
},
        "OVERRIDE_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
          "nullable": true,
          "info": "The location postal code that is to be used for this involved party on a shipment in place of (overridden) the one on the location table"
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
      "fk_tables": [
        "SHIPMENT_INV_PARTY_ADDRESS"
]
    }
  }
};