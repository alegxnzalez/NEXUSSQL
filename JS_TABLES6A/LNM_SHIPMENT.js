// LNM_SHIPMENT.js

window.LNM_SHIPMENT = {
  "tables": {
    "LNM_SHIPMENT": {
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
          "nullable": false
        },
        "SHIPMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "SHIPMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "A system generated unique identifier for the shipment withoout the domain. "
        },
        "BULK_PLAN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "If the shipment was planned via the bulk plan process, then the global identifier for the bulk plan. "
        },
        "PERSPECTIVE": {
          "type": "VARCHAR2(1)",
          "nullable": true
        },
        "ITINERARY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "PARENT_LEG_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The global identifier of the source location of the shipment. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The global identifier of the destination location of the shipment. "
        },
        "SERVPROV_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "TRANSPORT_MODE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "A unique identifier to define the transportation modes. (includes the domain name as part of the key) "
        },
        "FIRST_EQUIPMENT_GROUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "START_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "The actual shipment start time. Initially it is the system expected start time. It is updated once the carrier actually starts the shipment. "
        },
        "END_TIME": {
          "type": "DATE",
          "nullable": true,
          "info": "This is the time the shipment is delievered. Initially this is the system expected delivery time. It is updated with the actual delivery time when the shipment is delivered. "
        },
        "PLANNING_PARAMETER_SET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "This column holds the planning parameter set gid which is used in building this shipment "
        },
        "TOTAL_ACTUAL_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "This field stores the total actual cost of the shipment. "
        },
        "TOTAL_ACTUAL_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "TOTAL_ACTUAL_COST in base units. "
        },
        "TOTAL_ACTUAL_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_WEIGHTED_COST": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_WEIGHTED_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "TOTAL_WEIGHTED_COST in base units. "
        },
        "TOTAL_WEIGHTED_COST_CURR_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "NUM_ORDER_RELEASES": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of order releases that are on this shipment. "
        },
        "NUM_STOPS": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Number of shipment_stop records related to this shipment. "
        },
        "TOTAL_SHIP_UNIT_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_PACKAGING_UNIT_COUNT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_ITEM_PACKAGE_COUNT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Summary of ITEM_PACKAGE_COUNT of all line items. "
        },
        "NUM_EQUIPMENT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "TOTAL_WEIGHT in base units. "
        },
        "TOTAL_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_NET_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_NET_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "TOTAL_VOLUME in base units. "
        },
        "TOTAL_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "TOTAL_NET_VOLUME": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_NET_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "TOTAL_NET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "WEIGHT_UTILIZATION": {
          "type": "NUMBER()",
          "nullable": false
        },
        "VOLUME_UTILIZATION": {
          "type": "NUMBER()",
          "nullable": false
        },
        "EQUIP_REF_UNIT_UTILIZATION": {
          "type": "NUMBER()",
          "nullable": false
        },
        "TOTAL_HOURS": {
          "type": "NUMBER()",
          "nullable": true
        },
        "RATE_OFFERING_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "IS_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates whether a shipment is a template. "
        },
        "IS_PRIMARY": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_SPOT_COSTED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y/N based on whether the shipment cost is a spot cost specified by the service provider during a spot bid/broadcast tender. "
        },
        "IS_CREDIT_NOTE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_AUTO_MERGE_CONSOLIDATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "SHIPMENT_AS_WORK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Flag to indicate the shipment as work "
        },
        "CHECK_TIME_CONSTRAINT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "CHECK_COST_CONSTRAINT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "CHECK_CAPACITY_CONSTRAINT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "CM_PREV_DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Destination LOCATION_GID of the previous shipment in the CM tour. "
        },
        "CM_NEXT_SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Source LOCATION_GID of the next shipment in the CM tour "
        },
        "CM_NAME": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "SHIPMENT_GID of the first shipment in the tour. If the CM tour is received as input to GC3, this is the supplied tour id "
        },
        "CM_SEQUENCE_NUM": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Indicates the shipment's sequence in the CM tour "
        },
        "CM_COST": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The shipment cost when the shipment is part of a CM tour. "
        },
        "CM_COST_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "CM_COST in base units. "
        },
        "CM_COST_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "GC3 Global identifier for the entity. Is created by concatenating Domain Name,\".\" and XID. "
        },
        "CM_EMPTY_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The empty leg distance between previous and this shipments "
        },
        "CM_EMPTY_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "CM_EMPTY_DISTANCE in base units. "
        },
        "CM_EMPTY_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The unit of CM_EMPTY_DISTANCE "
        },
        "WEIGH_CODE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "A",
            "S",
            "N",
            "R",
            "D"
          ],
          "info": "THE TYPE OF WEIGHT. "
        },
        "RULE_7": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y,N NOTIFICATION FROM SHIPPER TO CARRIER THAT SHIPPER IS NOT LIABLE FOR FREIGHT CHARGES. "
        },
        "SHIPMENT_RELEASED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Y/N, USED IN RAIL SHIPPING TO INDICATE THAT THE SHIPMENT IS READY. "
        },
        "IS_HAZARDOUS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_TEMPERATURE_CONTROL": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_COST_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates shipment cost is a fixed cost. "
        },
        "IS_SERVICE_TIME_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_RATE_GEO_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "User assigned rate geo is fixed. "
        },
        "IS_RATE_OFFERING_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "User assigned rate offering is fixed. "
        },
        "IS_SERVPROV_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_PRELOAD": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_FIXED_TENDER_CONTACT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_TO_BE_HELD": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_PREFERRED_CARRIER": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Flag indicating whether the carrier selected for the shipment is preferred. "
        },
        "IS_EQUIPMENT_FIXED": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Is_Equipment_Fixed is used to check if a service provider can update the equipment_number and equipment_initials when accepting a tendered shipment. "
        },
        "IS_RECALC_TOTALS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Turns on/off totaling logic "
        },
        "HAS_APPOINTMENTS": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if any stops on the shipment have appointments "
        },
        "IN_TRAILER_BUILD": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Flag indicating whether this shipment is in a Trailer Build shipment group "
        },
        "DUTY_PAID": {
          "type": "VARCHAR2(8)",
          "nullable": true,
          "values": [
            "YES",
            "NO",
            "NA"
          ]
        },
        "IS_FIXED_DISTANCE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Boolean, defaults to N.  When set to Y, this flag indicates a user-entered value for the total_loaded_distance field"
        },
        "IS_FIXED_VOYAGE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ]
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_CURRENCY1": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_CURRENCY1_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_CURRENCY1_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ATTRIBUTE_CURRENCY2": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_CURRENCY2_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_CURRENCY2_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true
        },
        "ATTRIBUTE_CURRENCY3": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_CURRENCY3_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "ATTRIBUTE_CURRENCY3_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true
        },
        "BULKPLAN_SPEC_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "LOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LOADED_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "LOADED_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "UNLOADED_DISTANCE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNLOADED_DISTANCE_BASE": {
          "type": "NUMBER()",
          "nullable": true
        },
        "UNLOADED_DISTANCE_UOM_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "RATE_GEO_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true
        },
        "AIR_RAIL_ROUTE_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true
        }
      },
      "fk_tables": [
        "LNM_SHIPMENT_COST",
        "LNM_SHIPMENT_STOP"
      ]
    }
  }
};
