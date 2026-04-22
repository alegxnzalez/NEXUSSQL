// LEG_CLASSIFICATION.js

window.LEG_CLASSIFICATION = {
  "tables": {
    "LEG_CLASSIFICATION": {
      "columns": {
        "LEG_CLASSIFICATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "LEG_CLASSIFICATION_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "LEG_CLASSIFICATION_NAME": {
          "type": "VARCHAR2(120)",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(256)",
          "nullable": true
},
        "IS_TEMPORARY": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
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
        "SEQUENCING_FACTOR": {
          "type": "NUMBER",
          "nullable": true
}
      },
      "fk_tables": [
        "LEG",
        "OB_LEG_CONSTRAINT",
        "ORDER_MOVEMENT",
        "ORDER_RELEASE_LEG_CONSTRAINT"
]
    }
  }
};