// NFRC_RULE_INV_PARTY_CRITERIA.js

window.NFRC_RULE_INV_PARTY_CRITERIA = {
  "tables": {
    "NFRC_RULE_INV_PARTY_CRITERIA": {
      "columns": {
        "NFRC_RULE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "NFRC_RULE"
},
        "INVOLVED_PARTY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INVOLVED_PARTY_QUAL",
          "info": "Compared against involved parties of all orders in a job"
},
        "LOCATION_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LOCATION_PROFILE",
          "info": "Profile of locations to be compared against the involved parties of all orders in a job."
},
        "OBJECT_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "values": [
                    "JOB",
                    "BUYSHIPMENT",
                    "SELLSHIPMENT",
                    "ORDER"
          ],
          "info": "The object type that this involved party is associated with"
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