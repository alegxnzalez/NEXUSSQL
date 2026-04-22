// OB_SHIP_UNIT.js

window.OB_SHIP_UNIT = {
  "tables": {
    "OB_SHIP_UNIT": {
      "columns": {
        "OB_SHIP_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the ship unit associated to an order base. "
        },
        "OB_SHIP_UNIT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the ship unit associated to a order base. "
        },
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The order release associated to this ship unit. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The transport handling unit identifier defined for the ship unit. Examples are a box and a pallet. "
        },
        "SHIP_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of ship units this entry represents. Ship unit count of 1 to model discrete ship units and bulk orders. Greater than 1 to model multiple uniform ship units. "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The source location GID for the pickup location associated with this order base ship unit. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The destination location GID for the delivery location associated with this order base ship unit. "
        },
        "EARLY_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The earliest date when the item can be picked up. "
        },
        "LATE_PICKUP_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The latest date when the item can be picked up. "
        },
        "EARLY_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The earliest date when the item can be delivered. "
        },
        "LATE_DELIVERY_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "The latest date when the item can be picked delivered. "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The gross weight of the ship unit, the sum of the ship unit line contents weight plus the tare weight of the transport handling unit. "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The gross weight unit of measure. "
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The gross weight in the base unit of measure. "
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The gross volume of the ship unit, the sum of the ship unit line contents volume plus the tare volume of the transport handling unit. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The gross volume unit of measure. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The gross volume in the base unit of measure. "
        },
        "LENGTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The length of each order base ship unit. If this row represents 20 of the same ship units, the total length is 20 x unit length. "
        },
        "LENGTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the unit length column. "
        },
        "LENGTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The unit length in base units. "
        },
        "WIDTH": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The width of each order base ship unit. Each row may represent the ship unit count number of same ship units. "
        },
        "WIDTH_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the unit width. "
        },
        "WIDTH_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The unit width in base units. "
        },
        "HEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The height of each order base ship unit. If this row represents the 20 same ship units, the total height is 20 x unit height. "
        },
        "HEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for unit height column. "
        },
        "HEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The unit height in base units. "
        },
        "DECLARED_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The declared value of the total of the goods, ship unit content lines on the ship unit. "
        },
        "DECLARED_VALUE_BASE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The declared value in the base currency. "
        },
        "DECLARED_VALUE_CURRENCY_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "CURRENCY",
          "info": "The declared value currency identifier. "
        },
        "FLEX_COMMODITY_CODE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "The user defined commodity code for the item. E.g.. HTS, SITC, STCC, NMFC "
        },
        "FLEX_COMMODITY_QUAL_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "FLEX_COMMODITY_QUAL",
          "info": "The user defined commodity qualifier identify the type of commodity classification being used, such as NMFC. "
        },
        "PLAN_FROM_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The plan from location GID can define a location other than the source location of the ship unit for OTM to beginning planning transport. "
        },
        "PLAN_TO_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The plan from location GID can define a location other than the source location of the ship unit for OTM to beginning planning transport. "
        },
        "NET_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total net weight of the ship unit content lines on the ship unit. "
        },
        "NET_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The net weight unit of measure. "
        },
        "NET_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The net weight in the base unit of measure. "
        },
        "NET_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total net volume of the ship unit content lines on the ship unit. "
        },
        "NET_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The net volume unit of measure. "
        },
        "NET_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The net volume in the base unit of measure. "
        },
        "IS_SHIPPABLE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator defining if the order base line is ready to be shipped by creating an order release for it. "
        },
        "RELEASED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of ship units that have been processed onto order release through the releasing logic. "
        },
        "LOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The specific loading location for the source location on the ship unit. "
        },
        "UNLOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The specific unloading location for the delivery location on the ship unit. "
        },
        "PICKUP_IS_APPT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the early/late pickup times are appointment times "
        },
        "DELIVERY_IS_APPT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the early/late delivery times are appointment times "
        },
        "PLAN_FROM_LOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The specific loading location for the plan from location on the ship unit. "
        },
        "PLAN_TO_UNLOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The specific unloading location for the plan to location on the ship unit. "
        },
        "TAG_1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or size code, etc. "
        },
        "TAG_2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or size code, etc. "
        },
        "TAG_3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or size code, etc. "
        },
        "TAG_4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or size code, etc. "
        },
        "CORE_DIAMETER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "For cylindrical objects, this defines the diameter of the core. "
        },
        "CORE_DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The unit of measure for the diameter of the core. "
        },
        "CORE_DIAMETER_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The diameter of the core in the base unit of measure. "
        },
        "DIAMETER": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The unit diameter of the ship unit. "
        },
        "DIAMETER_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "Unit of measure for the unit diameter. "
        },
        "DIAMETER_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The unit diameter in the base unit of measure. "
        },
        "BUFFER_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The buffer location to identify if this order base ship unit is being modeled with a buffer location to hold inventory prior to final delivery. "
        },
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Database domain where this data is stored. "
        },
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false,
          "info": "The user ID of the data insert user. "
        },
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false,
          "info": "Date and time of data insert. "
        },
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "The user ID of the data update user. "
        },
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true,
          "info": "Date and time of the most recent data update. "
        },
        "LOAD_CONFIG_SETUP_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOAD_CONFIG_SETUP",
          "info": "A load configurator set up identifier to be used by the load configuration engine as the input rules for how the ship unit was built. "
        },
        "SPLITTABLE_BY": {
          "type": "VARCHAR2(10)",
          "nullable": true,
          "values": [
            "Bulk",
            "Count",
            "Individual"
          ],
          "info": "Indicates how the resulting order release ship unit may be split across equipment. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data type date"
        }
      },
      "fk_tables": [
        "OBSU_EQUIP_REF_UNIT_JOIN",
        "OBS_STATUS_HISTORY_SU",
        "OB_SHIP_UNIT_CONTENT",
        "OB_SHIP_UNIT_LOADING_SPLIT",
        "OB_SHIP_UNIT_REFNUM",
        "OB_SHIP_UNIT_REMARK",
        "OB_SHIP_UNIT_SEAL",
        "OB_SHIP_UNIT_STATUS",
        "OB_SU_ACCESSORIAL",
        "OB_SU_INVOLVED_PARTY",
        "OB_SU_RELEASE_INSTRUCTION",
        "OB_SU_SPECIAL_SERVICE",
        "OMR_D",
        "SHIP_UNIT"
      ]
    }
  }
};
