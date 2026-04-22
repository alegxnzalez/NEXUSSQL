// OB_LINE.js

window.OB_LINE = {
  "tables": {
    "OB_LINE": {
      "columns": {
        "OB_LINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "The GID for the order base line associated with the order base. "
        },
        "OB_LINE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "The XID for the order base line. "
        },
        "ORDER_BASE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OB_ORDER_BASE",
          "info": "The order base GID associated to this order base line. "
        },
        "SOURCE_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The source location GID for the pickup location associated with this order base line. "
        },
        "DEST_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The destination location GID for the delivery location associated with this order base line. "
        },
        "TAG1": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or size code etc. "
        },
        "TAG2": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or size code etc. "
        },
        "TAG3": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or size code etc. "
        },
        "TAG4": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "info": "Additional information about the item. Like the color or size code etc. "
        },
        "IS_SPLIT_ALLOWED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "info": "A true or false flag to define whether the line item can be split during the order release or shipment. "
        },
        "WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight of the packaged items for this line. "
        },
        "WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The weight unit of measure. "
        },
        "WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The weight in the base unit of measure. "
        },
        "VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume of the packaged items for this line. "
        },
        "VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The volume unit of measure. "
        },
        "VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The volume in the base unit of measure. "
        },
        "DECLARED_VALUE": {
          "type": "NUMBER()",
          "nullable": false,
          "info": "The declared value contains the stated value for the order base line item. "
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
        "PACKAGED_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "PACKAGED_ITEM",
          "info": "The packaged item GID defining the item associated to this order base line. "
        },
        "IS_AUTO_RELEASE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "A Y/N indicator to create the order release line from the order base line when it is initially created. "
        },
        "PACKAGED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The package count associated with the packaged item for this line. For example, 10 cases of product A. "
        },
        "LOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The specific loading location for the source location on the line. "
        },
        "UNLOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The specific unloading location for the delivery location on the line. "
        },
        "PICKUP_IS_APPT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the early/late pickup times are appointment times. "
        },
        "DELIVERY_IS_APPT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Indicates if the early/late delivery times are appointment times. "
        },
        "PLAN_FROM_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The plan from location GID can define a location other than the source location of the line to beginning planning transport. "
        },
        "PLAN_FROM_LOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The specific loading location for the plan from location on the line. "
        },
        "PLAN_TO_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The plan to location GID can define a location other than the destination location of the line to terminate planning transport. "
        },
        "PLAN_TO_UNLOAD_POINT": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "foreign_key": "LOCATION_LOAD_UNLOAD_POINT",
          "info": "The specific unloading location for the plan to location on the line. "
        },
        "NUM_LAYERS_PER_SHIP_UNIT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The number of layers for the transportation handling unit defined on the order base line. This allows you to define the TiHi date used to build ship units on the order release per each transactional line passed in, instead of looking to the static TiHi data on the packaged item table. "
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
        "QUANTITY_PER_LAYER": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The quantity per layer for the transportation handling unit defined on the order base line. This allows you to define the TiHi date used to build ship units on the order release per each transactional line passed in, instead of looking to the static TiHi data on the packaged item table "
        },
        "RELEASED_WEIGHT": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total released weight that has already been released against this order base line. "
        },
        "RELEASED_WEIGHT_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The released weight unit of measure. "
        },
        "RELEASED_WEIGHT_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The released weight in the base unit of measure. "
        },
        "RELEASED_VOLUME": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The total volume that has already been released against this order base line. "
        },
        "RELEASED_VOLUME_UOM_CODE": {
          "type": "VARCHAR2(64)",
          "nullable": true,
          "info": "The released volume unit of measure. "
        },
        "RELEASED_VOLUME_BASE": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "The released volume in the base unit of measure. "
        },
        "RELEASED_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The total released package count that has already been released against this order base line. "
        },
        "PACKAGING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The packaging unit (considered an inner pack to the packaged item level) for this order base line. "
        },
        "PACKAGING_UNIT_COUNT": {
          "type": "NUMBER(10)",
          "nullable": true,
          "info": "The packaging unit count associated to the packaging unit for this order base line. "
        },
        "TRANSPORT_HANDLING_UNIT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC",
          "info": "The transport handling unit that is to be used when building the order release ship unit. If defined here, it will take precedence to the data that is defined on the static packaged item table. "
        },
        "INITIAL_ITEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "ITEM",
          "info": "Can be used to define the substitution. "
        },
        "ROUNDING_INSTRUCTION": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "U",
            "D",
            "N"
          ],
          "info": "How the releasing logic will look to handle rounding when calculating the released values. "
        },
        "ROUND_TO": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "values": [
            "PUQ",
            "LAY",
            "THU"
          ],
          "info": "Round to packaging unit quantity (PUQ), layer (LAY), or transport handling unit (THU). "
        },
        "BUFFER_LOCATION_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "LOCATION",
          "info": "The buffer location GID. A buffer location can be an stock holding location that the order release ship to location will be built to. A subsequent order release will be created to move from this buffer location to the planned ship to location. "
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
        "THU_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "SHIP_UNIT_SPEC_PROFILE",
          "info": "The transport handling unit profile (list of valid THUs for this order line) that is to be used when building the order release ship unit. If defined here it will take precedence to the data that is defined on the static packaged Item table. "
        },
        "ATTRIBUTE1": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE2": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE3": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE4": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE5": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE6": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE7": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE8": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE9": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE10": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE11": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE12": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE13": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE14": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE15": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE16": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE17": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE18": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE19": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE20": {
          "type": "VARCHAR2(150)",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type VARCHAR2 (150) "
        },
        "ATTRIBUTE_NUMBER1": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER2": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER3": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER4": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER5": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER6": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER7": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER8": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER9": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_NUMBER10": {
          "type": "NUMBER()",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type NUMBER "
        },
        "ATTRIBUTE_DATE1": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE2": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE3": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE4": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE5": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE6": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE7": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE8": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE9": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date "
        },
        "ATTRIBUTE_DATE10": {
          "type": "DATE",
          "nullable": true,
          "info": "Attribute fields (flexfields) allow you to add additional information about an object. Data Type Date"
        }
      },
      "fk_tables": [
        "ALLOCATION_OB_LINE",
        "ALLOCATION_OB_LINE_D",
        "DVE_CALCULATION_LINE",
        "LD_SCREENING_LINE",
        "OBL_EQUIP_REF_UNIT_JOIN",
        "OBL_TO_AGGREGATED_ORL",
        "OB_LINE_ATTRIBUTE",
        "OB_LINE_INVOLVED_PARTY",
        "OB_LINE_PRU_DETAIL",
        "OB_LINE_REFNUM",
        "OB_LINE_REMARK",
        "OB_LINE_STATUS",
        "OB_RELEASE_INSTRUCTION",
        "OMR_D",
        "ORDER_RELEASE_LINE",
        "SHIP_UNIT_LINE"
      ]
    }
  }
};
