// RATE_GEO_COST_OP_OWNER.js

window.RATE_GEO_COST_OP_OWNER = {
  "tables": {
    "RATE_GEO_COST_OP_OWNER": {
      "description": "Private data that drives the internal behavior of the Rating Engine.",
      "columns": {
        "RATE_GEO_COST_OPERAND_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "OWNER_RATE_GEO_COST_OP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "RATE_GEO_COST_OPERAND_SEQ": {
          "type": "NUMBER",
          "nullable": true,
          "foreign_key": "RATE_GEO_COST_OPERAND",
          "values": [
                    "NULL"
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
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE"
}
      },
      "fk_tables": []
    }
  }
};