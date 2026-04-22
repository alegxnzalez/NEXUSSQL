// LNM_SHIPMENT_STOP_D.js

window.LNM_SHIPMENT_STOP_D = {
  "tables": {
    "LNM_SHIPMENT_STOP_D": {
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
          "foreign_key": "LNM_S_SHIP_UNIT"
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_SHIPMENT_STOP",
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,'.' and XID."
},
        "STOP_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_SHIPMENT_STOP",
          "info": "This field defines the stop number within the shipment. Stop Num = 1 is the Pickup stop, and the max (Stop Num) for a shipment is the delivery stop."
},
        "S_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "LNM_S_SHIP_UNIT",
          "info": "A unique pointer to define the shipment ship unit. The gid contains the domain portion."
},
        "ACTIVITY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "The activity performed at the stop.   For example:  Pickup,  Delivery etc."
},
        "ACTIVITY_TIME": {
          "type": "NUMBER",
          "nullable": true
},
        "ACTIVITY_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "ACTIVITY_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "ACTIVITY_TIME in base units."
},
        "IS_PERMANENT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ]
},
        "SHIP_UNIT_DWELL_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This field represents ship unit dwell time at the stop location as entered."
},
        "SHIP_UNIT_DWELL_TIME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "SHIP_UNIT_DWELL_TIME_BASE": {
          "type": "NUMBER",
          "nullable": true,
          "info": "This field represents ship unit dwell time at the stop location in base uom."
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