// EQUIP_GROUP_AVG_TA_DURATION.js

window.EQUIP_GROUP_AVG_TA_DURATION = {
  "tables": {
    "EQUIP_GROUP_AVG_TA_DURATION": {
      "columns": {
        "EQUIP_GROUP_AVG_TA_DUR_SEQ": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "info": "Unique Sequence Number. This will be handled with a default sequence."
},
        "X_LANE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "X_LANE",
          "info": "Geographic information of which the average turnaround time is associated."
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "Equipment Group Profile of which the average turnaround time is associated."
},
        "FLEX_COMMODITY_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_PROFILE",
          "info": "Flex Commodity Profile of which the average turnaround time is associated."
},
        "AVG_TA_DURATION": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Average Turnaround Duration (example, 20)"
},
        "AVG_TA_DURATION_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Average Turnaround Duration Unit (example, Days)"
},
        "AVG_TA_DURATION_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Average Turnaround Duration Base"
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