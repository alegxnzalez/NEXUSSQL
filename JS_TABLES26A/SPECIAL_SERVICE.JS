// SPECIAL_SERVICE.js

window.SPECIAL_SERVICE = {
  "tables": {
    "SPECIAL_SERVICE": {
      "description": "This is the master table that holds various special services required for transportation, pickup and delivery. A special service differs from an accessory in that the customer does not have to pay for using the special service. An example of a special service can be a pump required to pull the chemicals from a delivery truck.  The special services defined can be linked at the item level or at the location level in GC3. The logic in GC3 checks to see if a special service is required and thus, schedules the pick-up or delivery accordingly.",
      "columns": {
        "SPECIAL_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "SPECIAL_SERVICE_GID contains the unique identifier for the special service for the item being shipped."
},
        "SPECIAL_SERVICE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "SPECIAL_SERVICE_XID contains the unique exterbak identifier for the special service for the item being shipped."
},
        "PAYABLE_INDICATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "PAYABLE_INDICATOR",
          "info": "indicates the default payable status  of this special service"
},
        "BILLABLE_INDICATOR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "BILLABLE_INDICATOR",
          "info": "indicates the default billable status of this special service"
},
        "SPECIAL_SERVICE_DESC": {
          "type": "VARCHAR2(256)",
          "nullable": true,
          "info": "SPECIAL_SERVICE_DESC contains the description for the special service for the item being shipped."
},
        "MODE_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "MODE_PROFILE",
          "info": "MODE_PROFILE_GID contains the unique identifier for the mode profile for the item being shipped."
},
        "IS_ARBITRARY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Designates whether or not a special service is an arbitrary type special service."
},
        "SPECL_SRV_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SPECL_SRV_GROUP",
          "info": "Allow user to organize special services by group"
},
        "IS_FOR_DRIVER_CHK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Designates this special service is to be checked during driver assignment."
},
        "IS_FOR_PU_CHK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Designates this special service is to be checked during power unit assignment."
},
        "IS_FOR_EQUIP_CHK": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Designates this special service is to be checked during equipment assignment."
},
        "IS_IGNORABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "IS_TIME_BASED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ]
},
        "DRIVER_LEVEL": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "DRIVER",
                    "DRIVER_TYPE",
                    "ALL",
                    "NOT_APPLICABLE"
          ],
          "info": "Designates this special service is to apply at the driver or driver type level."
},
        "EQUIP_LEVEL": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "EQUIPMENT",
                    "EQUIPMENT_TYPE",
                    "ALL",
                    "NOT_APPLICABLE"
          ],
          "info": "Designates this special service is to apply at the equipment or equipment type level."
},
        "PU_LEVEL": {
          "type": "VARCHAR2(20)",
          "nullable": false,
          "values": [
                    "POWER_UNIT",
                    "POWER_UNIT_TYPE",
                    "ALL",
                    "NOT_APPLICABLE"
          ],
          "info": "Designates this special service is to apply at the power unit or power unit level."
},
        "IS_FOR_RATING": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "Designates this special service is to be used for rating."
},
        "ACTIVITY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ACTIVITY_TYPE",
          "info": "Hard coded list of stop activities that have internal OTM logic tied to it. This field is the one that maps the hard coded logic to the user definable notion of special service."
},
        "FOR_SOURCE_DEST": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
                    "B",
                    "D",
                    "S",
                    "L"
          ],
          "info": "The default stop which this special service will be on. S for Source, D for Destination, B for Both and L for Lane Based."
},
        "SEQ_NUM": {
          "type": "NUMBER",
          "nullable": false,
          "values": [
                    "1",
                    "2",
                    "3"
          ],
          "info": "Define this special service happens 1-before loading, 2-between unloading and loading, 3-after loading"
},
        "DRIVER_TIME_TYPE": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "values": [
                    "DRIVER_WORK",
                    "DRIVER_DRIVE",
                    "DRIVER_REST",
                    "DRIVER_WAIT"
          ],
          "info": "Indicates if the time associated with this special service is considered work time, drive time, rest time, or wait time for a driver, or does not count as driver time (when the value is null)."
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
        "ACTIVITY_TIME_DEF",
        "ATRL_SS_JOIN",
        "DM_RULE_D",
        "DM_TRANSACTION_LINEITEM",
        "DRIVER_SPECIAL_SERVICE",
        "DRIVER_TYPE_SPECIAL_SERVICE",
        "EQUIPMENT_SPECIAL_SERVICE",
        "EQUIPMENT_TYPE_SPECIAL_SERVICE",
        "IE_SPECIAL_SERVICE",
        "ITEM_SPECIAL_SERVICE",
        "LEG_INTERIM_POINT",
        "LOCATION_SPECIAL_SERVICE",
        "OB_SPECIAL_SERVICE",
        "OB_SU_SPECIAL_SERVICE",
        "ORDER_RELEASE_SPECIAL_SERVICE",
        "ORL_SPECIAL_SERVICE",
        "OR_STOP_SPECIAL_SERVICE",
        "POWER_UNIT_SPECIAL_SERVICE",
        "PU_TYPE_SPECIAL_SERVICE",
        "RG_SPECIAL_SERVICE",
        "RO_LANE_SPECIAL_SERVICE",
        "RO_SPECIAL_SERVICE",
        "SHIPMENT_COST",
        "SHIPMENT_INF_COST_D",
        "SHIPMENT_SPECIAL_SERVICE",
        "SHIP_UNIT_SPECIAL_SERVICE",
        "SPECIAL_SERVICE_PROFILE_D",
        "SPECL_SRV_COMP_SET_D",
        "SSCS_SS_JOIN",
        "S_SHIP_UNIT_SPECIAL_SERVICE",
        "TRACKING_LOCATION_RT_D",
        "WORK_INVOICE_ACTIVITY"
]
    }
  }
};