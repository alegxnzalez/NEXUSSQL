// CR_CONSTRAINTS_DEF.js

window.CR_CONSTRAINTS_DEF = {
  "tables": {
    "CR_CONSTRAINTS_DEF": {
      "description": "Definition of various constraints for determining the feasibility of a CR Route.",
      "columns": {
        "CR_CONSTRAINTS_DEF_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "CR_CONSTRAINTS_DEF_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "MIN_TM_BTW_SHIPMTS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Minimum time between shipments of a route."
},
        "MIN_TM_BTW_SHIPMTS_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MIN_TM_BTW_SHIPMTS_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_TM_BTW_SHIPMTS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum time between shipments of a route."
},
        "MAX_TM_BTW_SHIPMTS_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_TM_BTW_SHIPMTS_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MIN_DST_BTW_SHIPMTS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Minimum distance between shipments of a route."
},
        "MIN_DST_BTW_SHIPMTS_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MIN_DST_BTW_SHIPMTS_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_DST_BTW_SHIPMTS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum distance between shipments of a route."
},
        "MAX_DST_BTW_SHIPMTS_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_DST_BTW_SHIPMTS_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MIN_DURATION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Minimum route duration."
},
        "MIN_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MIN_DURATION_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_DURATION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum route duration."
},
        "MAX_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_DURATION_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MIN_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Minimum route distance."
},
        "MIN_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MIN_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_DISTANCE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum route distance."
},
        "MAX_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_DISTANCE_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_DEADHEAD_DST": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum route deadhead distance."
},
        "MAX_DEADHEAD_DST_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_DEADHEAD_DST_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_DEADHEAD_PERCENT": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum percent of route distance that can be deadhead."
},
        "MAX_TM_BTW_RESTS": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Maximum time between rests (for rough hours-of-service calculations)."
},
        "MAX_TM_BTW_RESTS_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_TM_BTW_RESTS_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MIN_REST_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Minimum rest time (for rough hours-of-service calculations)."
},
        "MIN_REST_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MIN_REST_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "DESCRIPTION": {
          "type": "VARCHAR2(120)",
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
        "CR_FLEET",
        "CR_SCENARIO"
]
    }
  }
};