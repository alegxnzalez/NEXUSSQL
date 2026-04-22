// SKU_COST_TYPE.js

window.SKU_COST_TYPE = {
  "tables": {
    "SKU_COST_TYPE": {
      "description": "Types of warehousing cost for SKU.",
      "columns": {
        "SKU_COST_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "SKU cost type id"
},
        "SKU_COST_TYPE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "SKU cost type xid"
},
        "SKU_COST_TYPE_DESC": {
          "type": "VARCHAR2(4000)",
          "nullable": true,
          "info": "Description of the cost type."
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
        "SKU_COST"
]
    }
  }
};