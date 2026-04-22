// ROUTE_TEMPLATE_LEG.js

window.ROUTE_TEMPLATE_LEG = {
  "tables": {
    "ROUTE_TEMPLATE_LEG": {
      "columns": {
        "ROUTE_TEMPLATE_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ROUTE_TEMPLATE_LEG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ROUTE_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ROUTE_TEMPLATE"
},
        "LEG_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "info": "LEG SEQNO, should be unique, in sequence with no gap."
},
        "START_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REGION",
          "info": "Any region specified here must have a representative location (REPRESENTATIVE_LOCATION_GID column in REGION table)."
},
        "START_DIST_THRESHOLD": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Distance threshold from representative location of Start Region."
},
        "START_DIST_THRESHOLD_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "START_DIST_THRESHOLD_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "END_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REGION",
          "info": "Any region specified here must have a representative location (REPRESENTATIVE_LOCATION_GID column in REGION table)."
},
        "END_DIST_THRESHOLD": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Distance threshold from representative location of End Region."
},
        "END_DIST_THRESHOLD_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "END_DIST_THRESHOLD_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "EARLY_DEPARTURE_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of seconds after midnight of Day 1 of the week."
},
        "LATE_DEPARTURE_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of seconds after midnight of Day 1 of the week."
},
        "EARLY_ARRIVAL_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of seconds after midnight of Day 1 of the week."
},
        "LATE_ARRIVAL_TIME": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Number of seconds after midnight of Day 1 of the week."
},
        "EQUIPMENT_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "This field overrides EQUIPMENT_GROUP_PROFILE_GID on Template Header level (ROUTE_TEMPLATE)."
},
        "MATCH_SHIP_TO_LEG": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "values": [
                    "ALWAYS",
                    "WHEN AVAILABLE",
                    "NEVER"
          ]
},
        "WARN_FOR_MISSING_LEG": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "MIN_TIME_TO_NEXT_LEG": {
          "type": "NUMBER",
          "nullable": true
},
        "MIN_TIME_TO_NEXT_LEG_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MIN_TIME_TO_NEXT_LEG_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_TIME_TO_NEXT_LEG": {
          "type": "NUMBER",
          "nullable": true
},
        "MAX_TIME_TO_NEXT_LEG_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "MAX_TIME_TO_NEXT_LEG_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "TIME_PHASED_PLN_THRSH": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Time Phased Planning Threshold.  If the difference between the system time and Instance Leg's early pickup time is within this threshold, and if there is no shipment that falls within the regions of the Instance Leg, planning engine will look for shipments that are outside the region but within the distance threshold."
},
        "TIME_PHASED_PLN_THRSH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TIME_PHASED_PLN_THRSH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "DOMAIN_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOMAIN_PROFILE",
          "info": "If this field is not null, only shipment/order in the domain that is contained in this profile can be matched to this Leg.  Should copy to Route Instance Leg."
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
        "ROUTE_TEMPLATE_LEG_INV_PARTY",
        "ROUTE_TEMPLATE_LEG_REFNUM",
        "ROUTE_TEMPLATE_LEG_REMARK",
        "ROUTE_TMPLT_LEG_LOC_INCOMPAT",
        "ROUTE_TMPLT_LEG_ORDER_COMPAT",
        "ROUTE_TMPLT_LEG_SHIP_COMPAT"
]
    }
  }
};