// JOB_INVOLVED_PARTY.js

window.JOB_INVOLVED_PARTY = {
  "tables": {
    "JOB_INVOLVED_PARTY": {
      "columns": {
        "JOB_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "JOB"
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOLVED_PARTY_QUAL"
},
        "INVOLVED_PARTY_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "CONTACT"
},
        "COM_METHOD_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "COM_METHOD"
},
        "SHIPPING_AGENT_CONTACT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPPING_AGENT_CONTACT"
},
        "OVERRIDE_LOCATION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "OVERRIDE_CITY": {
          "type": "VARCHAR2(40)",
          "nullable": true
},
        "OVERRIDE_PROVINCE": {
          "type": "VARCHAR2(50)",
          "nullable": true
},
        "OVERRIDE_PROVINCE_CODE": {
          "type": "VARCHAR2(6)",
          "nullable": true
},
        "OVERRIDE_COUNTRY_CODE3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "COUNTRY_CODE"
},
        "OVERRIDE_POSTAL_CODE": {
          "type": "VARCHAR2(15)",
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
        "JOB_INV_PARTY_ADDRESS"
]
    }
  }
};