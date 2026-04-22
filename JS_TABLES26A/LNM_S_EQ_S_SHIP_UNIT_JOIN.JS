// LNM_S_EQ_S_SHIP_UNIT_JOIN.js

window.LNM_S_EQ_S_SHIP_UNIT_JOIN = {
  "tables": {
    "LNM_S_EQ_S_SHIP_UNIT_JOIN": {
      "columns": {
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
        "SCENARIO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_S_EQUIPMENT"
},
        "S_EQUIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_S_EQUIPMENT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_S_SHIP_UNIT",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "COMPARTMENT_NUM": {
          "type": "NUMBER",
          "nullable": true
},
        "LOADING_SEQUENCE": {
          "type": "NUMBER",
          "nullable": true
},
        "LOADING_PATTERN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "NUM_STACKING_LAYERS": {
          "type": "NUMBER",
          "nullable": false
},
        "NUM_LOADING_ROWS": {
          "type": "NUMBER",
          "nullable": false
},
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
},
        "BULKPLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
}
      },
      "fk_tables": []
    }
  }
};