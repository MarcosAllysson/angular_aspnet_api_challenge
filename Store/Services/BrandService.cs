using Store.Models;
using System.Collections.Generic;
using System.Linq;

namespace Store.Services{
    
    public static class BrandService {
        static List<Brand> Brands { get; }
        static int nextId = 2;
        static BrandService(){
            
            Brands = new List<Brand>{
                new Brand { 
                    Id = 1, 
                    name = "Amazon", 
                    category = "Technology",
                    location = "USA"
                },
            };
        }

        public static List<Brand> GetAll() => Brands;

        public static Brand Get(int id) => Brands.FirstOrDefault(p => p.Id == id);

        public static void Add(Brand brand){
            brand.Id = nextId++;
            Brands.Add(brand);
        }

        public static void Delete(int id){
            var brand = Get(id);
            if(brand is null)
                return;

            Brands.Remove(brand);
        }

        public static void Update(Brand brand){
            var index = Brands.FindIndex(p => p.Id == brand.Id);
            if(index == -1)
                return;

            Brands[index] = brand;
        }
    }
}