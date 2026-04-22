// ROUTE_INSTANCE_LEG.js

window.ROUTE_INSTANCE_LEG = {
  "tables": {
    "ROUTE_INSTANCE_LEG": {
      "columns": {
        "ROUTE_INSTANCE_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true
},
        "ROUTE_INSTANCE_LEG_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "ROUTE_INSTANCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "ROUTE_INSTANCE"
},
        "LEG_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "info": "Number must be unique, in sequence with no gap."
},
        "START_REGION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "REGION",
          "info": "Copied over from Route Template Leg.  Region must have a representative location."
},
        "START_DIST_THRESHOLD": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Distance threshold from representative location of start region."
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
          "info": "Copied over from Route Template Leg.  Region must have a representative location."
},
        "END_DIST_THRESHOLD": {
          "type": "NUMBER",
          "nullable": true,
          "info": "Distance threshold from representative location of end region."
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
          "type": "DATE",
          "nullable": true,
          "info": "Based on timezone for representative location from Start Region."
},
        "LATE_DEPARTURE_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Based on timezone for representative location from Start Region."
},
        "EARLY_ARRIVAL_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Based on timezone for representative location from End Region."
},
        "LATE_ARRIVAL_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "Based on timezone for representative location from End Region."
},
        "EQUIP_GROUP_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EQUIPMENT_GROUP_PROFILE",
          "info": "This field overrides EQUIPMENT_GROUP_PROFILE_GID on Instance Header level (ROUTE_INSTANCE table)"
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
          "info": "Time Phased Planning Threshold.  Copied over from Route Template Leg.  If the difference between the system time and the Instance Leg's early pickup time is within this threshold, and if there is no shipment that falls within the regions of the Instance Leg, planning engine will look for shipments that are outside the region but within the distance theshold."
},
        "TIME_PHASED_PLN_THRSH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true
},
        "TIME_PHASED_PLN_THRSH_BASE": {
          "type": "NUMBER",
          "nullable": true
},
        "ASSIGNMENT_TYPE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "values": [
                    "MOST SPECIFIC",
                    "WITHIN THRESHOLD",
                    "NON STANDARD"
          ],
          "info": "Indicate how well this shipment is assigned to the Route Instance Leg from a geographical point of view.  'MOST SPECIFIC': within the regions on Leg;  'WITHIN THRESHOLD': outside the regions, but within thresholds;  'NON STANDARD': outside the regions and outside the thresholds."
},
        "ASSIGNMENT_SOURCE": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "values": [
                    "SYSTEM",
                    "MANUAL"
          ],
          "info": "'SYSTEM': assignment of shipment to leg was made by Bulk Plan or Build Shipment Direct;  'MANUAL': assignment of shipment to leg was made via manual action."
},
        "IS_DEVIATED_LEG": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "FEASIBILITY_CODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FEASIBILITY_CODE"
},
        "WARN_FOR_MISSING_LEG": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "USER_DEFINED1_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "USER_DEFINED2_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "USER_DEFINED3_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "USER_DEFINED4_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "USER_DEFINED5_ICON_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ICON"
},
        "DOMAIN_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DOMAIN_PROFILE",
          "info": "Copied over from Route Template Leg.  If this field is not null, only a shipment/order in the domain that is contained in this profile can be matched to this Leg."
},
        "INDICATOR": {
          "type": "VARCHAR2(1)",
          "nullable": true
},
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIPMENT"
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
        "ROUTE_INSTANCE_LEG_INV_PARTY",
        "ROUTE_INSTANCE_LEG_REFNUM",
        "ROUTE_INSTANCE_LEG_REMARK",
        "ROUTE_INSTANCE_LEG_STATUS"
]
    }
  }
};